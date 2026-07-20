/**
 * React useKeyDown wrapper for key "F17".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F17"
 * Description                 The F17 key.
 * Virtual Keycode
 *     Windows                 VK_F17 (0x80)
 *     Mac                     kVK_F17 (0x40)
 *     Linux                   GDK_KEY_F17 (0xFFCE)
 *                             Qt::Key_F17 (0x01000040)
 *     Android                 KEYCODE_F17 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF17KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
