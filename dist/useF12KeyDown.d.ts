/**
 * React useKeyDown wrapper for key "F12".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F12"
 * Description                 The F12 key.
 * Virtual Keycode
 *     Windows                 VK_F12 (0x7B)
 *     Mac                     kVK_F12 (0x6F)
 *     Linux                   GDK_KEY_F12 (0xFFC9)
 *                             Qt::Key_F12 (0x0100003B)
 *     Android                 KEYCODE_F12 (142)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF12KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
