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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVSatelliteCSKeyUp(callback, enabled = true, target) {
    useKeyUp("TVSatelliteCS", callback, enabled, target);
};
