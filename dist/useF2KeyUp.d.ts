/**
 * React useKeyUp wrapper for key "F2".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F2"
 * Description                 The F2 key.
 * Virtual Keycode
 *     Windows                 VK_F2 (0x71)
 *     Mac                     kVK_F2 (0x78)
 *     Linux                   GDK_KEY_F2 (0xFFBF)
 *                             GDK_KEY_KP_F2 (0xFF92)
 *                             Qt::Key_F2 (0x01000031)
 *     Android                 KEYCODE_F2 (132)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF2KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
