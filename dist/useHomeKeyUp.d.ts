/**
 * React useKeyUp wrapper for key "Home".
 *
 * Category                    Navigation keys
 * KeyboardEvent.key value     "Home"
 * Description                 The Home key. Moves to the start of content.
 * Virtual Keycode
 *     Windows                 VK_HOME (0x24)
 *     Mac                     kVK_Home (0x73)
 *     Linux                   GDK_KEY_Home (0xFF50)
 *                             GDK_KEY_KP_Home (0xFF95)
 *                             Qt::Key_Home (0x01000010)
 *     Android                 KEYCODE_MOVE_HOME (122)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useHomeKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
