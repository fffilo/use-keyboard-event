/**
 * React useKeyUp wrapper for key " ".
 *
 * Category                    Whitespace keys
 * KeyboardEvent.key value     " "
 * Description                 The space key, Space Bar.
 * Virtual Keycode
 *     Windows                 VK_SPACE (0x20)
 *     Mac                     kVK_Space (0x31)
 *     Linux                   GDK_KEY_space (0x20)
 *                             GDK_KEY_KP_Space (0xFF80)
 *                             Qt::Key_Space (0x20)
 *     Android                 KEYCODE_SPACE (62)
 *
 * Older browsers may return "Spacebar" instead of " " for the Space Bar key. Firefox did so until version 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSpaceKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
