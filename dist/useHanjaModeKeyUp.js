import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "HanjaMode".
 *
 * Category                    IME and composition keys → Korean keyboards only
 * KeyboardEvent.key value     "HanjaMode"
 * Description                 Selects the Hanja mode, for converting Hangul characters to the more specific Hanja characters.
 * Virtual Keycode
 *     Windows                 VK_HANJA (0x19)
 *     Linux                   GDK_KEY_Hangul_Hanja (0xFF34)
 *                             Qt::Key_Hangul_Hanja (0x01001134)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useHanjaModeKeyUp(callback, enabled = true) {
    useKeyUp("HanjaMode", callback, enabled);
};
