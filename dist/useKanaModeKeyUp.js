import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "KanaMode".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "KanaMode"
 * Description                 The Kana Mode (Kana Lock) key.
 * Virtual Keycode
 *     Windows                 VK_KANA (0x15)
 *                             VK_ATTN (0xF6)
 *     Linux                   GDK_KEY_Kana_Lock (0xFF2D)
 *                             GDK_KEY_Kana_Shift (0xFF2E)
 *                             Qt::Key_Kana_Lock (0x0100112D)
 *                             Qt::Key_Kana_Shift (0x0100112E)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useKanaModeKeyUp(callback, enabled = true) {
    useKeyUp("KanaMode", callback, enabled);
};
