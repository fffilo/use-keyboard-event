import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "BrowserBack".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserBack"
 * Description                 Navigates to the previous content or page in the current Web view's history.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_BACK (0xA6)
 *                             APPCOMMAND_BROWSER_BACKWARD (null)
 *     Linux                   GDK_KEY_Back (0x1008FF26)
 *                             Qt::Key_Back (0x01000061)
 *     Android                 KEYCODE_BACK (4)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useBrowserBackKeyUp(callback, enabled = true) {
    useKeyUp("BrowserBack", callback, enabled);
};
