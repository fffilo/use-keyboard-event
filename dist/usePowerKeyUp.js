import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Power".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "Power"
 * Description                 The Power button or key, to toggle power on and off. Note: Not all systems pass this key through to the user agent.
 * Virtual Keycode
 *     Android                 KEYCODE_POWER (26)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePowerKeyUp(callback, enabled = true) {
    useKeyUp("Power", callback, enabled);
};
