/**
 * React useKeyUp wrapper for key "F13".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F13"
 * Description                 The F13 key.
 * Virtual Keycode
 *     Windows                 VK_F13 (0x7C)
 *     Mac                     kVK_F13 (0x69)
 *     Linux                   GDK_KEY_F13 (0xFFCA)
 *                             Qt::Key_F13 (0x0100003C)
 *     Android                 KEYCODE_F13 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF13KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
