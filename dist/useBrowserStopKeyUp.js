import useKeyUp from "./useKeyUp";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useBrowserStopKeyUp(callback, enabled = true) {
    useKeyUp("BrowserStop", callback, enabled);
};
