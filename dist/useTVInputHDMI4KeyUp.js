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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVInputHDMI4KeyUp(callback, enabled = true) {
    useKeyUp("TVInputHDMI4", callback, enabled);
};
