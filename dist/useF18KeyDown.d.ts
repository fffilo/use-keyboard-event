/**
 * React useKeyDown wrapper for key "F18".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F18"
 * Description                 The F18 key.
 * Virtual Keycode
 *     Windows                 VK_F18 (0x81)
 *     Mac                     kVK_F18 (0x4F)
 *     Linux                   GDK_KEY_F18 (0xFFCF)
 *                             Qt::Key_F18 (0x01000041)
 *     Android                 KEYCODE_F18 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF18KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
