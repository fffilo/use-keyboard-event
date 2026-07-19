import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "TVSatellite".
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
export default function useTVSatelliteKeyDown(callback, enabled = true) {
    useKeyDown("TVSatellite", callback, enabled);
};
