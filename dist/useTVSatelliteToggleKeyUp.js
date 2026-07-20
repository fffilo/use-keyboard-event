import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVSatelliteToggle".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVSatelliteToggle"
 * Description                 Toggles among available satellites.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_SATELLITE_SERVICE (240)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVSatelliteToggleKeyUp(callback, enabled = true, target) {
    useKeyUp("TVSatelliteToggle", callback, enabled, target);
};
