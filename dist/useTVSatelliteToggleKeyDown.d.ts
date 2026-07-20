/**
 * React useKeyDown wrapper for key "TVSatelliteToggle".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVSatelliteToggle"
 * Description                 Toggles among available satellites.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_SATELLITE_SERVICE (240)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVSatelliteToggleKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
