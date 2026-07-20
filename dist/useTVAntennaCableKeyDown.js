import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVAntennaCable".
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
export default function useTVAntennaCableKeyDown(callback, enabled = true) {
    useKeyDown("TVAntennaCable", callback, enabled);
};
