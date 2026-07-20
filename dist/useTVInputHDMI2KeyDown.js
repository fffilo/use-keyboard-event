import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVInputHDMI2".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputHDMI2"
 * Description                 Switches to the input "HDMI 2."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_HDMI_2 (244)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVInputHDMI2KeyDown(callback, enabled = true) {
    useKeyDown("TVInputHDMI2", callback, enabled);
};
