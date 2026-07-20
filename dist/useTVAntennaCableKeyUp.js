import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVAntennaCable".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAntennaCable"
 * Description                 Toggles between antenna and cable inputs.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_ANTENNA_CABLE (242)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVAntennaCableKeyUp(callback, enabled = true, target) {
    useKeyUp("TVAntennaCable", callback, enabled, target);
};
