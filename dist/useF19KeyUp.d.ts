/**
 * React useKeyUp wrapper for key "F19".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F19"
 * Description                 The F19 key.
 * Virtual Keycode
 *     Windows                 VK_F19 (0x82)
 *     Mac                     kVK_F19 (0x50)
 *     Linux                   GDK_KEY_F19 (0xFFD0)
 *                             Qt::Key_F19 (0x01000042)
 *     Android                 KEYCODE_F19 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF19KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
