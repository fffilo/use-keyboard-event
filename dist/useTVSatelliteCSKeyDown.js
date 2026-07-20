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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVSatelliteCSKeyDown(callback, enabled = true, target) {
    useKeyDown("TVSatelliteCS", callback, enabled, target);
};
