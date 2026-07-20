import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVPower".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVPower"
 * Description                 The device's power button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_POWER (177)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVPowerKeyUp(callback, enabled = true, target) {
    useKeyUp("TVPower", callback, enabled, target);
};
