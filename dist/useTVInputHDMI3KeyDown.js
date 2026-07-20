import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVInputHDMI3".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputHDMI3"
 * Description                 Switches to the input "HDMI 3."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_HDMI_3 (245)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVInputHDMI3KeyDown(callback, enabled = true, target) {
    useKeyDown("TVInputHDMI3", callback, enabled, target);
};
