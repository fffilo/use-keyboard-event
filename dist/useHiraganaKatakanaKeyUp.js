import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "HiraganaKatakana".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "HiraganaKatakana"
 * Description                 Toggles between the Hiragana and Katakana writing systems.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Hiragana_Katakana (0xFF27)
 *                             Qt::Key_Hiragana_Katakana (0x01001127)
 *     Android                 KEYCODE_KATAKANA_HIRAGANA (215)
 *
 * This key is reported as "Unidentified" prior to Firefox 37.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useHiraganaKatakanaKeyUp(callback, enabled = true, target) {
    useKeyUp("HiraganaKatakana", callback, enabled, target);
};
