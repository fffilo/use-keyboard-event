/**
 * React useKeyDown wrapper for key "TVSatelliteCS".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVSatelliteCS"
 * Description                 Communication Satellite button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_SATELLITE_CS (239)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVSatelliteCSKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
