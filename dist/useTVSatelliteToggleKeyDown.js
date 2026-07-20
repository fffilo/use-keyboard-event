import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVSatelliteToggle".
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
export default function useTVSatelliteToggleKeyDown(callback, enabled = true) {
    useKeyDown("TVSatelliteToggle", callback, enabled);
};
