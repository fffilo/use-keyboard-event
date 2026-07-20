import useKeyUp from "./useKeyUp.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useKanjiModeKeyUp(callback, enabled = true, target) {
    useKeyUp("KanjiMode", callback, enabled, target);
};
