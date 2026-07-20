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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVSatelliteToggleKeyDown(callback, enabled = true, target) {
    useKeyDown("TVSatelliteToggle", callback, enabled, target);
};
