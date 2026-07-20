/**
 * React useKeyDown wrapper for key "F10".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F10"
 * Description                 The F10 key.
 * Virtual Keycode
 *     Windows                 VK_F10 (0x79)
 *     Mac                     kVK_F10 (0x6D)
 *     Linux                   GDK_KEY_F10 (0xFFC7)
 *                             Qt::Key_F10 (0x01000039)
 *     Android                 KEYCODE_F10 (140)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useF10KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
