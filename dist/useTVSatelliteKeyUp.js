import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVSatellite".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVSatellite"
 * Description                 Satellite button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_SATELLITE (237)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVSatelliteKeyUp(callback, enabled = true) {
    useKeyUp("TVSatellite", callback, enabled);
};
