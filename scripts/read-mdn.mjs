import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const src = "https://raw.githubusercontent.com/mdn/content/main/files/en-us/web/api/ui_events/keyboard_event_key_values/index.md";
const response = await fetch(src);
if (!response.ok)
    throw new Error(`Unable to download MDN page (${response.status})`);

const markdown = await response.text();
const dst = "cache/mdn.md";
mkdirSync(dirname(dst), { recursive: true });
writeFileSync(dst, markdown);

console.log(`Downloaded ${dst}`);
