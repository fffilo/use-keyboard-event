import useKeyUp from "./useKeyUp";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useHiraganaKatakanaKeyUp(callback, enabled = true) {
    useKeyUp("HiraganaKatakana", callback, enabled);
};
