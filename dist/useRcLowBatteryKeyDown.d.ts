/**
 * React useKeyDown wrapper for key "RcLowBattery".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "RcLowBattery"
 * Description                 A code sent when the remote control's battery is low. This doesn't actually correspond to a physical key at all.
 * Virtual Keycode
 *     Windows                 VK_RC_LOW_BATTERY (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useRcLowBatteryKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
