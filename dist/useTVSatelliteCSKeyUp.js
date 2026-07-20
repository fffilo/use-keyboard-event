import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVSatelliteCS".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVSatelliteCS"
 * Description                 Communication Satellite button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_SATELLITE_CS (239)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVSatelliteCSKeyUp(callback, enabled = true) {
    useKeyUp("TVSatelliteCS", callback, enabled);
};
