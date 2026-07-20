/**
 * React useKeyUp wrapper for key "Power".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "Power"
 * Description                 The Power button or key, to toggle power on and off. Note: Not all systems pass this key through to the user agent.
 * Virtual Keycode
 *     Android                 KEYCODE_POWER (26)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePowerKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
