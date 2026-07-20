/**
 * React useKeyUp wrapper for key "TVTerrestrialAnalog".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVTerrestrialAnalog"
 * Description                 Selects analog terrestrial television service (analog cable or antenna reception).
 * Virtual Keycode
 *     Android                 KEYCODE_TV_TERRESTRIAL_ANALOG (235)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVTerrestrialAnalogKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
