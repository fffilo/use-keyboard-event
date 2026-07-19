import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "BrowserHome".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserHome"
 * Description                 Navigates to the user's preferred home page.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_HOME (0xAC)
 *                             APPCOMMAND_BROWSER_HOME (null)
 *     Linux                   GDK_KEY_HomePage (0x1008FF18)
 *                             Qt::Key_HomePage (0x01000090)
 *     Android                 KEYCODE_HOME (3)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useBrowserHomeKeyUp(callback, enabled = true) {
    useKeyUp("BrowserHome", callback, enabled);
};
