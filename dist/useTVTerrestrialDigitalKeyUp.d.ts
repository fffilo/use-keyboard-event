/**
 * React useKeyUp wrapper for key "TVTerrestrialDigital".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVTerrestrialDigital"
 * Description                 Selects digital terrestrial television service (digital cable or antenna reception).
 * Virtual Keycode
 *     Android                 KEYCODE_TV_TERRESTRIAL_DIGITAL (236)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVTerrestrialDigitalKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
