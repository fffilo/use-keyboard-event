import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "GroupNext".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "GroupNext"
 * Description                 Switches to the next character group on an ISO/IEC 9995 keyboard [https://en.wikipedia.org/wiki/ISO/IEC_9995].
 * Virtual Keycode
 *     Linux                   GDK_KEY_ISO_Next_Group (0xFE08)
 *     Android                 KEYCODE_LANGUAGE_SWITCH (204)
 *
 * Prior to Firefox 37, these keys were "Unidentified".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useGroupNextKeyDown(callback, enabled = true, target) {
    useKeyDown("GroupNext", callback, enabled, target);
};
