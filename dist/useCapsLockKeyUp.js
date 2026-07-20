import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "CapsLock".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "CapsLock"
 * Description                 The Caps Lock key. Toggles the capital character lock on and off for subsequent input.
 * Virtual Keycode
 *     Windows                 VK_CAPITAL (0x14)
 *     Mac                     kVK_CapsLock (0x39)
 *     Linux                   GDK_KEY_Caps_Lock (0xFFE5)
 *                             Qt::Key_CapsLock (0x01000024)
 *     Android                 KEYCODE_CAPS_LOCK (115)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useCapsLockKeyUp(callback, enabled = true) {
    useKeyUp("CapsLock", callback, enabled);
};
