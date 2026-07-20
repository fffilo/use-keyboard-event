import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVInputHDMI1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputHDMI1"
 * Description                 Switches to the input "HDMI 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_HDMI_1 (243)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVInputHDMI1KeyDown(callback, enabled = true) {
    useKeyDown("TVInputHDMI1", callback, enabled);
};
