import useKeyUp from "./useKeyUp";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVPowerKeyUp(callback, enabled = true) {
    useKeyUp("TVPower", callback, enabled);
};
