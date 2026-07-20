import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVSatelliteBS".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVSatelliteBS"
 * Description                 Broadcast Satellite button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_SATELLITE_BS (238)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVSatelliteBSKeyUp(callback, enabled = true, target) {
    useKeyUp("TVSatelliteBS", callback, enabled, target);
};
