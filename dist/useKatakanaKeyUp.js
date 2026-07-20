import useKeyUp from "./useKeyUp.js";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useKatakanaKeyUp(callback, enabled = true) {
    useKeyUp("Katakana", callback, enabled);
};
