/**
 * React useKeyDown wrapper for key "Separator".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "Separator"
 * Description                 The numeric keypad's places separator character. (In the United States this is a comma, but elsewhere it is frequently a period.)
 * Virtual Keycode
 *     Windows                 VK_SEPARATOR (0x6C)
 *     Mac                     kVK_JIS_KeypadComma (0x5F)
 *     Linux                   GDK_KEY_KP_Separator (0xFFAC)
 *     Android                 KEYCODE_NUMPAD_COMMA (159)
 *
 * While older browsers used words like "Add", "Decimal", "Multiply", and so forth modern browsers identify these using the actual character ("+", ".", "*", and so forth).
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSeparatorKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
