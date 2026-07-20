import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "STBPower".
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
export default function useSTBPowerKeyDown(callback, enabled = true, target) {
    useKeyDown("STBPower", callback, enabled, target);
};
