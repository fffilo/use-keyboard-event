import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "KanaMode".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useKanaModeKeyDown(callback, enabled = true, target) {
    useKeyDown("KanaMode", callback, enabled, target);
};
