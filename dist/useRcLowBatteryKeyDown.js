import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "RcLowBattery".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "RcLowBattery"
 * Description                 A code sent when the remote control's battery is low. This doesn't actually correspond to a physical key at all.
 * Virtual Keycode
 *     Windows                 VK_RC_LOW_BATTERY (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useRcLowBatteryKeyDown(callback, enabled = true) {
    useKeyDown("RcLowBattery", callback, enabled);
};
