import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Enter".
 *
 * Category                    Whitespace keys
 * KeyboardEvent.key value     "Enter"
 * Description                 The Enter or ↵ key (sometimes labeled Return).
 * Virtual Keycode
 *     Windows                 VK_RETURN (0x0D)
 *     Mac                     kVK_Return (0x24)
 *                             kVK_ANSI_KeypadEnter (0x4C)
 *                             kVK_Powerbook_KeypadEnter (0x34)
 *     Linux                   GDK_KEY_Return (0xFF0D)
 *                             GDK_KEY_KP_Enter (0xFF8D)
 *                             GDK_KEY_ISO_Enter (0xFE34)
 *                             GDK_KEY_3270_Enter (0xFD1E)
 *                             Qt::Key_Return (0x01000004)
 *                             Qt::Key_Enter (0x01000005)
 *     Android                 KEYCODE_ENTER (66)
 *                             KEYCODE_NUMPAD_ENTER (160)
 *                             KEYCODE_DPAD_CENTER (23)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useEnterKeyUp(callback, enabled = true, target) {
    useKeyUp("Enter", callback, enabled, target);
};
