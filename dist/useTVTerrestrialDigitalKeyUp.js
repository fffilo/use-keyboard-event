import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVTerrestrialDigital".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVTerrestrialDigital"
 * Description                 Selects digital terrestrial television service (digital cable or antenna reception).
 * Virtual Keycode
 *     Android                 KEYCODE_TV_TERRESTRIAL_DIGITAL (236)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVTerrestrialDigitalKeyUp(callback, enabled = true, target) {
    useKeyUp("TVTerrestrialDigital", callback, enabled, target);
};
