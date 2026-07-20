import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVSatellite".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVSatellite"
 * Description                 Satellite button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_SATELLITE (237)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVSatelliteKeyUp(callback, enabled = true, target) {
    useKeyUp("TVSatellite", callback, enabled, target);
};
