import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "BrowserForward".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserForward"
 * Description                 Navigates to the next content or page in the current Web view's history.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_FORWARD (0xA7)
 *                             APPCOMMAND_BROWSER_FORWARD (null)
 *     Linux                   GDK_KEY_Forward (0x1008FF27)
 *                             Qt::Key_Forward (0x01000062)
 *     Android                 KEYCODE_FORWARD (125)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useBrowserForwardKeyUp(callback, enabled = true) {
    useKeyUp("BrowserForward", callback, enabled);
};
