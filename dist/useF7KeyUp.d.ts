/**
 * React useKeyUp wrapper for key "F7".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F7"
 * Description                 The F7 key.
 * Virtual Keycode
 *     Windows                 VK_F7 (0x76)
 *     Mac                     kVK_F7 (0x62)
 *     Linux                   GDK_KEY_F7 (0xFFC4)
 *                             Qt::Key_F7 (0x01000036)
 *     Android                 KEYCODE_F7 (137)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF7KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
