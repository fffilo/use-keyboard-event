import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Shift".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "Shift"
 * Description                 The Shift key. Modifies keystrokes to allow typing upper (or other) case letters, and to support typing punctuation and other special characters.
 * Virtual Keycode
 *     Windows                 VK_SHIFT (0x10)
 *                             VK_LSHIFT (0xA0)
 *                             VK_RSHIFT (0xA1)
 *     Mac                     kVK_Shift (0x38)
 *                             kVK_RightShift (0x3C)
 *     Linux                   GDK_KEY_Shift_L (0xFFE1)
 *                             GDK_KEY_Shift_R (0xFFE2)
 *                             Qt::Key_Shift (0x01000020)
 *     Android                 KEYCODE_SHIFT_LEFT (59)
 *                             KEYCODE_SHIFT_RIGHT (60)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useShiftKeyDown(callback, enabled = true, target) {
    useKeyDown("Shift", callback, enabled, target);
};
