/**
 * React useKeyUp wrapper for key "TVSatellite".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVSatellite"
 * Description                 Satellite button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_SATELLITE (237)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVSatelliteKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
