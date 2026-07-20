/**
 * React useKeyDown wrapper for key "TVPower".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVPower"
 * Description                 The device's power button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_POWER (177)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVPowerKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
