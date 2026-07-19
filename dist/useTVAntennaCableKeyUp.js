import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "TVAntennaCable".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAntennaCable"
 * Description                 Toggles between antenna and cable inputs.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_ANTENNA_CABLE (242)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVAntennaCableKeyUp(callback, enabled = true) {
    useKeyUp("TVAntennaCable", callback, enabled);
};
