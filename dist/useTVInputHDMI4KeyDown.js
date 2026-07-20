import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVInputHDMI4".
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
export default function useTVInputHDMI4KeyDown(callback, enabled = true, target) {
    useKeyDown("TVInputHDMI4", callback, enabled, target);
};
