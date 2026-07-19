import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "TVSatelliteBS".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVSatelliteBS"
 * Description                 Broadcast Satellite button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_SATELLITE_BS (238)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVSatelliteBSKeyDown(callback, enabled = true) {
    useKeyDown("TVSatelliteBS", callback, enabled);
};
