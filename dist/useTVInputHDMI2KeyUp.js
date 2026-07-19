import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "TVInputHDMI2".
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
export default function useTVInputHDMI2KeyUp(callback, enabled = true) {
    useKeyUp("TVInputHDMI2", callback, enabled);
};
