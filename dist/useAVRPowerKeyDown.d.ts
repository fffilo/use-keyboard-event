/**
 * React useKeyDown wrapper for key "AVRPower".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "AVRPower"
 * Description                 Toggles the power on an external AVR unit.
 * Virtual Keycode
 *     Android                 KEYCODE_AVR_POWER (181)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAVRPowerKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
