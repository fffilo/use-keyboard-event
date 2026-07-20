import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Power".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "Power"
 * Description                 The Power button or key, to toggle power on and off. Note: Not all systems pass this key through to the user agent.
 * Virtual Keycode
 *     Android                 KEYCODE_POWER (26)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePowerKeyDown(callback, enabled = true, target) {
    useKeyDown("Power", callback, enabled, target);
};
