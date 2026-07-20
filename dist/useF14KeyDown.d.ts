/**
 * React useKeyDown wrapper for key "F14".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F14"
 * Description                 The F14 key.
 * Virtual Keycode
 *     Windows                 VK_F14 (0x7D)
 *     Mac                     kVK_F14 (0x6B)
 *     Linux                   GDK_KEY_F14 (0xFFCB)
 *                             Qt::Key_F14 (0x0100003D)
 *     Android                 KEYCODE_F14 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF14KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
