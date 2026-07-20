/**
 * React useKeyDown wrapper for key "TVAntennaCable".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAntennaCable"
 * Description                 Toggles between antenna and cable inputs.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_ANTENNA_CABLE (242)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVAntennaCableKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
