import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const processor = remark()
    .use(remarkRehype)
    .use(rehypeStringify);

function getHtml(node) {
    if (node.type === "html")
        return node.value;

    const hast = processor.runSync({
        type: "root",
        children: [node],
    });

    return processor.stringify(hast);
};

const src = "cache/mdn.md";
const markdown = readFileSync(src, "utf8");
const content = markdown.match(/^##\s[\s\S]*/m)[0];
const tree = remark().parse(content);

const sections = [];
for (let i = 0; i < tree.children.length; i++) {
    const node = tree.children[i];
    if (node.type === "heading" && node.depth === 2) {
        sections.push([getHtml(node)]);

        continue;
    }

    const len = sections.length;
    if (!len)
        continue;

    const section = sections[len - 1];
    section.push(getHtml(node));
};

const dst = "cache/mdn.json";
mkdirSync(dirname(dst), { recursive: true });
writeFileSync(dst, JSON.stringify(sections, null, 4));

console.log(`File created ${dst}`);
