import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Shift".
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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useShiftKeyUp(callback, enabled = true) {
    useKeyUp("Shift", callback, enabled);
};
