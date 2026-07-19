import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "NonConvert".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "NonConvert"
 * Description                 The NonConvert ("Don't convert") key. This accepts the current input method sequence without running conversion when using an IME.
 * Virtual Keycode
 *     Windows                 VK_NONCONVERT (0x1D)
 *     Linux                   GDK_KEY_Muhenkan (0xFF22)
 *                             Qt::Key_Muhenkan (0x01001122)
 *     Android                 KEYCODE_MUHENKAN (213)
 *
 * The NonConvert key is reported as "Nonconvert" instead of the correct "NonConvert" by Firefox versions 36 and earlier.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useNonConvertKeyUp(callback, enabled = true) {
    useKeyUp("NonConvert", callback, enabled);
};
