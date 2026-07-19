import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "GroupPrevious".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "GroupPrevious"
 * Description                 Switches to the previous character group on an ISO/IEC 9995 keyboard [https://en.wikipedia.org/wiki/ISO/IEC_9995].
 * Virtual Keycode
 *     Linux                   GDK_KEY_ISO_Prev_Group (0xFE0A)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useGroupPreviousKeyUp(callback, enabled = true) {
    useKeyUp("GroupPrevious", callback, enabled);
};
