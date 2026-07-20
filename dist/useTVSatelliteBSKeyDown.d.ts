/**
 * React useKeyDown wrapper for key "TVSatelliteBS".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVSatelliteBS"
 * Description                 Broadcast Satellite button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_SATELLITE_BS (238)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVSatelliteBSKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
