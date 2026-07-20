/**
 * React useKeyDown wrapper for key "TVRadioService".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVRadioService"
 * Description                 Radio button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_RADIO_SERVICE (232)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVRadioServiceKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
