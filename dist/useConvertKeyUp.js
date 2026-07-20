import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Convert".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "Convert"
 * Description                 The Convert key, which instructs the IME to convert the current input method sequence into the resulting character.
 * Virtual Keycode
 *     Windows                 VK_CONVERT (0x1C)
 *     Linux                   GDK_KEY_Henkan (0xFF23)
 *                             Qt::Key_Henkan (0x01001123)
 *     Android                 KEYCODE_HENKAN (214)
 *
 * Prior to Firefox 37, these keys were "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useConvertKeyUp(callback, enabled = true) {
    useKeyUp("Convert", callback, enabled);
};
