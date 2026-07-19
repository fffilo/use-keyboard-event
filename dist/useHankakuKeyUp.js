import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Hankaku".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "Hankaku"
 * Description                 The Hankaku (half-width characters) key.
 * Virtual Keycode
 *     Windows                 VK_OEM_AUTO (0xF3)
 *     Linux                   GDK_KEY_Hankaku (0xFF29)
 *                             Qt::Key_Hankaku (0x01001129)
 *
 * Prior to Firefox 37, the Hankaku (half-width) key generated the key value "HalfWidth" on Firefox.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useHankakuKeyUp(callback, enabled = true) {
    useKeyUp("Hankaku", callback, enabled);
};
