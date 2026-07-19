import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "TVSatelliteToggle".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVSatelliteToggle"
 * Description                 Toggles among available satellites.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_SATELLITE_SERVICE (240)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVSatelliteToggleKeyUp(callback, enabled = true) {
    useKeyUp("TVSatelliteToggle", callback, enabled);
};
