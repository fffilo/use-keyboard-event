import useKeyUp from "./useKeyUp";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useBrowserSearchKeyUp(callback, enabled = true) {
    useKeyUp("BrowserSearch", callback, enabled);
};
