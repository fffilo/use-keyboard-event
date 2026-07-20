/**
 * React useKeyDown wrapper for key "F4".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F4"
 * Description                 The F4 key.
 * Virtual Keycode
 *     Windows                 VK_F4 (0x73)
 *     Mac                     kVK_F4 (0x76)
 *     Linux                   GDK_KEY_F4 (0xFFC1)
 *                             GDK_KEY_KP_F4 (0xFF94)
 *                             Qt::Key_F4 (0x01000033)
 *     Android                 KEYCODE_F4 (134)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF4KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
