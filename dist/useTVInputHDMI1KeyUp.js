import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVInputHDMI1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputHDMI1"
 * Description                 Switches to the input "HDMI 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_HDMI_1 (243)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVInputHDMI1KeyUp(callback, enabled = true, target) {
    useKeyUp("TVInputHDMI1", callback, enabled, target);
};
