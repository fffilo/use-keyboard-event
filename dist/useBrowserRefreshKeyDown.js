import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "BrowserRefresh".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserRefresh"
 * Description                 Refreshes the current page or content.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_REFRESH (0xA8)
 *                             APPCOMMAND_BROWSER_REFRESH (null)
 *     Linux                   GDK_KEY_Refresh (0x1008FF29)
 *                             GDK_KEY_Reload (0x1008FF73)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useBrowserRefreshKeyDown(callback, enabled = true, target) {
    useKeyDown("BrowserRefresh", callback, enabled, target);
};
