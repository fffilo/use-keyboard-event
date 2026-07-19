import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "GroupLast".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "GroupLast"
 * Description                 Switches to the last character group on an ISO/IEC 9995 keyboard [https://en.wikipedia.org/wiki/ISO/IEC_9995].
 * Virtual Keycode
 *     Linux                   GDK_KEY_ISO_Last_Group (0xFE0E)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useGroupLastKeyUp(callback, enabled = true) {
    useKeyUp("GroupLast", callback, enabled);
};
