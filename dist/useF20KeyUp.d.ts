/**
 * React useKeyUp wrapper for key "F20".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F20"
 * Description                 The F20 key.
 * Virtual Keycode
 *     Windows                 VK_F20 (0x83)
 *     Mac                     kVK_F20 (0x5A)
 *     Linux                   GDK_KEY_F20 (0xFFD1)
 *                             Qt::Key_F20 (0x01000043)
 *     Android                 KEYCODE_F20 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF20KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
