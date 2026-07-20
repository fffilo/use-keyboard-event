import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVInputHDMI4".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputHDMI4"
 * Description                 Switches to the input "HDMI 4."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_HDMI_4 (246)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVInputHDMI4KeyUp(callback, enabled = true, target) {
    useKeyUp("TVInputHDMI4", callback, enabled, target);
};
