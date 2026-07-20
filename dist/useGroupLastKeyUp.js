import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "GroupLast".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "GroupLast"
 * Description                 Switches to the last character group on an ISO/IEC 9995 keyboard [https://en.wikipedia.org/wiki/ISO/IEC_9995].
 * Virtual Keycode
 *     Linux                   GDK_KEY_ISO_Last_Group (0xFE0E)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useGroupLastKeyUp(callback, enabled = true, target) {
    useKeyUp("GroupLast", callback, enabled, target);
};
