/**
 * React useKeyUp wrapper for key "Katakana".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "Katakana"
 * Description                 The Katakana key.
 * Virtual Keycode
 *     Windows                 VK_OEM_FINISH (0xF1)
 *     Linux                   GDK_KEY_Katakana (0xFF26)
 *                             Qt::Key_Katakana (0x01001126)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useKatakanaKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
