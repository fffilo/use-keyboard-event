/**
 * React useKeyUp wrapper for key "Select".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Select"
 * Description                 The Select key.
 * Virtual Keycode
 *     Windows                 VK_SELECT (0x29)
 *     Linux                   GDK_KEY_Select (0xFF60)
 *     Android                 KEYCODE_BUTTON_SELECT (109)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSelectKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
