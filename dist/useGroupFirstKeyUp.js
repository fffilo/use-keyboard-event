import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "GroupFirst".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "GroupFirst"
 * Description                 Switches to the first character group on an ISO/IEC 9995 keyboard [https://en.wikipedia.org/wiki/ISO/IEC_9995]. Each key may have multiple groups of characters, each in its own column. Pressing this key instructs the device to interpret key presses as coming from the first column on subsequent keystrokes.
 * Virtual Keycode
 *     Linux                   GDK_KEY_ISO_First_Group (0xFE0C)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useGroupFirstKeyUp(callback, enabled = true) {
    useKeyUp("GroupFirst", callback, enabled);
};
