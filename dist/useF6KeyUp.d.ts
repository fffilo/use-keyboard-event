/**
 * React useKeyUp wrapper for key "F6".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F6"
 * Description                 The F6 key.
 * Virtual Keycode
 *     Windows                 VK_F6 (0x75)
 *     Mac                     kVK_F6 (0x61)
 *     Linux                   GDK_KEY_F6 (0xFFC3)
 *                             Qt::Key_F6 (0x01000035)
 *     Android                 KEYCODE_F6 (136)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF6KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
