import { dirname } from "node:path";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { load } from "cheerio";
import { htmlToText } from "html-to-text";

function getTextFromHtml(html) {
    return htmlToText(html, {
        selectors: [
            { selector: "h1", format: "heading", options: { uppercase: false } },
            { selector: "h2", format: "heading", options: { uppercase: false } },
            { selector: "h3", format: "heading", options: { uppercase: false } },
            { selector: "h4", format: "heading", options: { uppercase: false } },
            { selector: "h5", format: "heading", options: { uppercase: false } },
            { selector: "h6", format: "heading", options: { uppercase: false } },
            { selector: "ul", format: "unorderedList", options: { itemPrefix: "- " } },
        ],
        wordwrap: null,
    })
        .replace(/\{\{(?:glossary|domxref)\("([^"]+)"(?:,\s*"([^"]+)")?\)\}\}/g, (_, first, second) => second ?? first)
        .replace(/\n\n/g, "\n");
};

function nestHeadings(nodes) {
    const root = [];
    const stack = [{ level: 0, children: root }];

    for (const node of nodes) {
        const match = node.match(/^<h([1-6])\b/i);

        if (!match) {
            // Normal content belongs to the current level.
            stack[stack.length - 1].children.push(node);
            continue;
        }

        const level = Number(match[1]);
        while (stack.length && stack[stack.length - 1].level >= level) {
            stack.pop();
        }

        const group = [node];
        stack[stack.length - 1].children.push(group);

        stack.push({
            level,
            children: group
        });
    }

    return root[0];
}

function parseSection(section) {
    const nodes = nestHeadings(section);
    const result = {
        category: null,
        description: null,
        note: null,
        data: null,
        footnotes: null,
    };

    for (const node of nodes) {
        if (Array.isArray(node)) {
            // No need to add non-KeyboardEvent data (for example Dead
            // keycodes for Linux).
            const data = parseSection(node);
            if (!data.data)
                continue;

            if (!result.data)
                result.data = [];

            result.data.push(data);
        }
        else if (!result.category && /^<h[1-6]/.test(node)) {
            result.category = getTextFromHtml(node);
        }
        else if ((/^<blockquote>\s*<p>\[!NOTE\]/).test(node)) {
            result.note = getTextFromHtml(node).replace(/^>\s*\[!NOTE\]\s*/, "");
        }
        else if ((/^<table/).test(node)) {
            result.data = parseTable(node);
        }
        else if (result.category && !result.data) {
            if (!result.description)
                result.description = "";

            result.description += node + "\n";
        }
        else if (result.category && result.data && /^<\w+>\[\d+\]/.test(node)) {
            if (!result.footnotes)
                result.footnotes = [];

            result.footnotes.push(node);
        }
    };

    if (result.description)
        result.description = getTextFromHtml(result.description);
    if (result.footnotes)
        result.footnotes = result.footnotes.reduce((carry, note) => {
            const str = getTextFromHtml(note);
            const match = str.match(/(\[\d+\])\s+(.*)/);

            carry[match[1]] = match[2];

            return carry;
        }, {});

    return result;
};

function parseTable(html) {
    const $ = load(html);
    if ($("thead tr:first-child th:first-child").text().trim().toLowerCase() !== "KeyboardEvent.key Value".toLowerCase())
        return null;

    const result = [];
    $("tbody tr").each((_, el) => {
        const row = parseRow($, el);
        // @todo - last key is "0" through "9"

        result.push(row);
    });

    return result;
};

function parseRow($, row) {
    const $cells = $(row).find("td");
    const { key, deprecated, footnotes: valueFootnotes } = parseRowValue($, $cells[0]);
    const { description, footnotes: descriptionFootnotes } = parseRowDescription($, $cells[1]);
    const footnotes = [...new Set([...(valueFootnotes || []), ...(descriptionFootnotes || [])])];

    return {
        key,
        description,
        virtualKeyCode: {
            windows: parseRowKeyCodes($, $cells[2]),
            mac: parseRowKeyCodes($, $cells[3]),
            linux: parseRowKeyCodes($, $cells[4]),
            android: parseRowKeyCodes($, $cells[5]),
        },
        deprecated,
        footnotes: footnotes.length ? footnotes : null,
    };
};

function parseRowValue($, cell) {
    const value = getTextFromHtml($(cell).html());
    const match = value.match(/"(.*?)"(?:\s((?:\[\d+\]){1,}))?(\s{{deprecated_inline}})?/);
    const key = match[1];
    const footnotes = match[2] ? match[2].match(/\[\d+\]/g) : null;
    const deprecated = !!match[3];

    return {
        key,
        deprecated,
        footnotes,
    };
};

function parseRowDescription($, cell) {
    const value = getTextFromHtml($(cell).html());
    const match = value.match(/^.*?(?=\s*\[\d+\](?:\s*\[\d+\])*$)|\[\d+\]/gs);

    return {
        description: match ? match.shift() : value,
        footnotes: match && match.length ? match : null,
    };
};

function parseRowKeyCodes($, cell) {
    const $cell = $(cell);
    if ($cell.text() === "varies")
        return "varies";

    const $code = $cell.find("code");
    if (!$code.length)
        return null;

    return $code.map((_, code) => {
        const $code = $(code);
        const name = $code.text();
        const tail = $code[0].nextSibling?.nodeValue ?? "";
        const match = tail.match(/\((.*?)\)/);

        return {
            name,
            code: match?.[1] ?? null,
        };
    }).get();
};

const src = "cache/mdn.json";
const data = JSON.parse(readFileSync(src, "utf8"));

const sections = [];
for (const section of data) {
    sections.push(parseSection(section));
};

const dst = "cache/data.json";
mkdirSync(dirname(dst), { recursive: true });
writeFileSync(dst, JSON.stringify(sections, null, 4));

console.log("File created cache/data.json");
