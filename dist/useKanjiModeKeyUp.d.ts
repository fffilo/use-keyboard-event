/**
 * React useKeyUp wrapper for key "KanjiMode".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "KanjiMode"
 * Description                 The Kanji Mode key. Enables entering Japanese text using the ideographic characters of Chinese origin.
 * Virtual Keycode
 *     Windows                 VK_KANJI (null)
 *     Mac                     kVK_JIS_Kana (0x68)
 *     Linux                   GDK_KEY_Kanji (0xFF21)
 *                             Qt::Key_Kanji (0x01001121)
 *     Android                 KEYCODE_KANA (218)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useKanjiModeKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
