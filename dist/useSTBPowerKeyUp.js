import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "STBPower".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "STBPower"
 * Description                 Toggles on and off an external STB.
 * Virtual Keycode
 *     Android                 KEYCODE_STB_POWER (179)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSTBPowerKeyUp(callback, enabled = true, target) {
    useKeyUp("STBPower", callback, enabled, target);
};
