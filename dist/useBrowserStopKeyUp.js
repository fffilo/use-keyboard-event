import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "BrowserStop".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserStop"
 * Description                 Stops loading the currently displayed Web view or content.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_STOP (0xA9)
 *                             APPCOMMAND_BROWSER_STOP (null)
 *     Linux                   GDK_KEY_Stop (0x1008FF28)
 *                             Qt::Key_Search (0x01000063)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useBrowserStopKeyUp(callback, enabled = true, target) {
    useKeyUp("BrowserStop", callback, enabled, target);
};
