import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVTerrestrialAnalog".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVTerrestrialAnalog"
 * Description                 Selects analog terrestrial television service (analog cable or antenna reception).
 * Virtual Keycode
 *     Android                 KEYCODE_TV_TERRESTRIAL_ANALOG (235)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVTerrestrialAnalogKeyUp(callback, enabled = true, target) {
    useKeyUp("TVTerrestrialAnalog", callback, enabled, target);
};
