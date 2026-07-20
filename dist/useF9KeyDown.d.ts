/**
 * React useKeyDown wrapper for key "F9".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F9"
 * Description                 The F9 key.
 * Virtual Keycode
 *     Windows                 VK_F9 (0x78)
 *     Mac                     kVK_F9 (0x65)
 *     Linux                   GDK_KEY_F9 (0xFFC6)
 *                             Qt::Key_F9 (0x01000038)
 *     Android                 KEYCODE_F9 (139)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF9KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
