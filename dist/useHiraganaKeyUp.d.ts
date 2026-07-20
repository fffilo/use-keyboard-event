/**
 * React useKeyUp wrapper for key "Hiragana".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "Hiragana"
 * Description                 The Hiragana key; selects Kana characters mode.
 * Virtual Keycode
 *     Windows                 VK_OEM_COPY (0xF2)
 *     Linux                   GDK_KEY_Hiragana (0xFF25)
 *                             Qt::Key_Hiragana (0x01001125)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useHiraganaKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
