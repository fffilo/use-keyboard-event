import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "TVInputVGA1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputVGA1"
 * Description                 Switches to the input "VGA 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_VGA_1 (251)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVInputVGA1KeyUp(callback, enabled = true) {
    useKeyUp("TVInputVGA1", callback, enabled);
};
