/**
 * React useKeyUp wrapper for key "STBPower".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "STBPower"
 * Description                 Toggles on and off an external STB.
 * Virtual Keycode
 *     Android                 KEYCODE_STB_POWER (179)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSTBPowerKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
