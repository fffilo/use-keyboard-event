import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "BrowserSearch".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useBrowserSearchKeyUp(callback, enabled = true, target) {
    useKeyUp("BrowserSearch", callback, enabled, target);
};
