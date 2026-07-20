/**
 * React useKeyDown wrapper for key "BrowserSearch".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserSearch"
 * Description                 Activates the user's preferred search engine or the search interface within their browser.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_SEARCH (0xAA)
 *                             APPCOMMAND_BROWSER_SEARCH (null)
 *     Linux                   GDK_KEY_Search (0x1008FF1B)
 *                             Qt::Key_Search (0x01000092)
 *     Android                 KEYCODE_SEARCH (84)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useBrowserSearchKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
