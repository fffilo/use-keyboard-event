import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVSatelliteCS".
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
export default function useTVSatelliteCSKeyDown(callback, enabled = true) {
    useKeyDown("TVSatelliteCS", callback, enabled);
};
