import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Alphanumeric".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "Alphanumeric"
 * Description                 The Alphanumeric key.
 * Virtual Keycode
 *     Windows                 VK_OEM_ATTN (0xF0)
 *     Linux                   GDK_KEY_Eisu_Shift (0xFF2F)
 *                             GDK_KEY_Eisu_toggle (0xFF30)
 *                             Qt::Key_Eisu_Shift (0x0100112f)
 *                             Qt::Key_Eisu_toggle (0x01001130)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAlphanumericKeyUp(callback, enabled = true) {
    useKeyUp("Alphanumeric", callback, enabled);
};
