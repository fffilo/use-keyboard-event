import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVInputHDMI2".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputHDMI2"
 * Description                 Switches to the input "HDMI 2."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_HDMI_2 (244)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVInputHDMI2KeyUp(callback, enabled = true, target) {
    useKeyUp("TVInputHDMI2", callback, enabled, target);
};
