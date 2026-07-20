import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AVRPower".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "AVRPower"
 * Description                 Toggles the power on an external AVR unit.
 * Virtual Keycode
 *     Android                 KEYCODE_AVR_POWER (181)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAVRPowerKeyUp(callback, enabled = true, target) {
    useKeyUp("AVRPower", callback, enabled, target);
};
