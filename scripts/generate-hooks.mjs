import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";

const aliases = {
    " ": "Space",
};

const dist = "dist";
mkdirSync(dist, { recursive: true });

const src = "cache/data.json";
const data = JSON.parse(readFileSync(src, "utf8"));
const copied = [];
const generated = [];
const deprecated = [];

function splitDocBlock(value, offset=4) {
    // @todo
    return [ value ];
};

function generateDocBlock(lines, wrapper, config, categories, footnotes) {
    lines.push(`/**`);
    lines.push(` * React ${wrapper} wrapper for key "${config.key}".`);
    lines.push(` *`);

    generateDocBlockCategory(lines, categories);
    generateDocBlockKeyboardEvent(lines, config.key)
    generateDocBlockDescription(lines, config.description);
    generateDocBlockVirtualKeyCode(lines, config.virtualKeyCode);
    lines.push(` *`);
    generateDocBlockFootnotes(lines, config.footnotes, footnotes);

    lines.push(` * @param  {Function} callback`);
    lines.push(` * @param  {Boolean}  enabled`);
    lines.push(` * @return {Void}`);
    lines.push(` */`);
};

function generateDocBlockCategory(lines, categories) {
    let value = categories.join(" → ");
    value = ` * Category                    ${value}`;
    value = splitDocBlock(value);

    value.forEach(line => lines.push(line));
};

function generateDocBlockKeyboardEvent(lines, key) {
    let value = `"${key}"`;
    value = ` * KeyboardEvent.key value     ${value}`;
    value = splitDocBlock(value);

    value.forEach(line => lines.push(line));
};

function generateDocBlockDescription(lines, description) {
    let value = description.replace(/\n/g, " ");
    value = ` * Description                 ${value}`;
    value = splitDocBlock(value);

    value.forEach(line => lines.push(line));
};

function generateDocBlockVirtualKeyCode(lines, virtualKeyCode) {
    if (!virtualKeyCode || !Object.values(virtualKeyCode).some(Boolean))
        return;

    lines.push(` * Virtual Keycode`);
    ["windows", "mac", "linux", "android"].forEach(platform => generateDocBlockVirtualKeyCodeForPlatform(lines, virtualKeyCode[platform], platform));
};

function generateDocBlockVirtualKeyCodeForPlatform(lines, codes, platform) {
    if (!codes)
        return;
    else if (Array.isArray(codes))
        codes = codes.slice();

    let initLine = " *     ";
    initLine += platform.charAt(0).toUpperCase() + platform.slice(1);
    initLine += " ".repeat(32 - 1 - initLine.length);

    if (typeof codes === "string")
        initLine += codes;
    else {
        const keyCode = codes.shift();
        initLine += `${keyCode.name} (${keyCode.code})`;
    }

    lines.push(initLine);

    // @todo - use split???
    if (Array.isArray(codes))
        codes.forEach((keyCode) => {
            lines.push(` *                             ${keyCode.name} (${keyCode.code})`);
        });
};

function generateDocBlockFootnotes(lines, footnotes, definitions) {
    if (!footnotes)
        return;

    footnotes.forEach(footnote => lines.push(` * ` + definitions[footnote]));
    lines.push(` *`);
};

function generateScript(hookName, wrapper, config, categories, footnotes) {
    const lines = [];
    lines.push(`import ${wrapper} from "./${wrapper}.js";`);
    lines.push(``);
    generateDocBlock(lines, wrapper, config, categories, footnotes);
    lines.push(`export default function ${hookName}(callback, enabled = true) {`);
    lines.push(`    ${wrapper}("${config.key}", callback, enabled);`);
    lines.push(`};`);
    lines.push(``);

    return lines.join("\n");
};

function processSection(section, ...category) {
    if (!section.data) {
        console.warn(`Warning: no data entry for "${section.category}" category`);

        return;
    }

    for (const config of section.data) {
        if (config.category) {
            processSection(config, section.category);
        }
        else if (config.deprecated) {
            deprecated.push(config.key);

            continue;
        }
        else if (config.key)
            ["down", "up"].forEach((dir) => {
                const eventName = `Key${dir.charAt(0).toUpperCase() + dir.slice(1)}`;
                const hookName = `use${(config.key in aliases) ? aliases[config.key] : config.key}${eventName}`;
                const wrapper = `use${eventName}`;
                const dst = `${dist}/${hookName}.js`;
                const script = generateScript(hookName, wrapper, config, [...category, section.category], section.footnotes);

                writeFileSync(dst, script);
                generated.push(hookName);
            });
    }
};

// Copy engine (useKeyboardEvent) and wrappers (useKeyDown and useKeyUp) to
// dist directory.
["useKeyboardEvent", "useKeyDown", "useKeyUp"].forEach((hookName) => {
    copyFileSync(`src/${hookName}.js`, `dist/${hookName}.js`)
    copied.push(hookName);
});

// Generate keydown/keyup wrappers for each key.
for (const section of data) {
    processSection(section);
}

// @todo
// - last key entry is "0" through "9" (need to create entry for each key)
// - there are two "Clear" keys ("Editing keys" category and "Numeric keypad keys" category)

// Create barrel file.
writeFileSync("dist/index.js", `export { default } from "./useKeyboardEvent.js";
export { default as useKeyDown } from "./useKeyDown.js";
export { default as useKeyUp } from "./useKeyUp.js";
${generated.filter((hookName, index, array) => array.indexOf(hookName) === index).map(hookName => `export { default as ${hookName} } from "./${hookName}.js";`).join("\n")}
`);

console.log(`Copied ${copied.length} hook(s) from source, ${generated.length} key hook(s) generated, ${deprecated.length} deprecated key(s) skipped`);
