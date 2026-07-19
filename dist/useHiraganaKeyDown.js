import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Hiragana".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "Hiragana"
 * Description                 The Hiragana key; selects Kana characters mode.
 * Virtual Keycode
 *     Windows                 VK_OEM_COPY (0xF2)
 *     Linux                   GDK_KEY_Hiragana (0xFF25)
 *                             Qt::Key_Hiragana (0x01001125)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useHiraganaKeyDown(callback, enabled = true) {
    useKeyDown("Hiragana", callback, enabled);
};
