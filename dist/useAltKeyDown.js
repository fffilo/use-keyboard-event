import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Alt".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "Alt"
 * Description                 The Alt (Alternative) key.
 * Virtual Keycode
 *     Windows                 VK_MENU (0x12)
 *                             VK_LMENU (0xA4)
 *                             VK_RMENU (0xA5)
 *     Mac                     kVK_Option (0x3A)
 *                             kVK_RightOption (0x3D)
 *     Linux                   GDK_KEY_Alt_L (0xFFE9)
 *                             GDK_KEY_Alt_R (0xFFEA)
 *                             Qt::Key_Alt (0x01000023)
 *     Android                 KEYCODE_ALT_LEFT (57)
 *                             KEYCODE_ALT_RIGHT (58)
 *
 * Chrome 67 and Firefox 63 now correctly interpret the right Alt key for keyboard layouts which map that key to AltGr. See Firefox bug Firefox bug 900750 [https://bugzil.la/900750] and Chrome bug 25503 [https://crbug.com/25503] for further details.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAltKeyDown(callback, enabled = true) {
    useKeyDown("Alt", callback, enabled);
};
