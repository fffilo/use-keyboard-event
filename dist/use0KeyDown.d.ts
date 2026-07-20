/**
 * React useKeyDown wrapper for key "0".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "0"
 * Description                 The actual digit keys on the numeric keypad.
 * Virtual Keycode
 *     Windows                 VK_NUMPAD0 (0x60)
 *                             VK_NUMPAD9 (0x69)
 *     Mac                     kVK_Keypad0 (0x52)
 *                             kVK_Keypad9 (0x5C)
 *     Linux                   GDK_KEY_KP_0 (0xFFB0)
 *                             GDK_KEY_KP_9 (0xFFB9)
 *     Android                 KEYCODE_NUMPAD_0 (144)
 *                             KEYCODE_NUMPAD_9 (153)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function use0KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
