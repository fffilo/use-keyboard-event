import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "RcLowBattery".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "RcLowBattery"
 * Description                 A code sent when the remote control's battery is low. This doesn't actually correspond to a physical key at all.
 * Virtual Keycode
 *     Windows                 VK_RC_LOW_BATTERY (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useRcLowBatteryKeyUp(callback, enabled = true, target) {
    useKeyUp("RcLowBattery", callback, enabled, target);
};
