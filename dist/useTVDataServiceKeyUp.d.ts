/**
 * React useKeyUp wrapper for key "TVDataService".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVDataService"
 * Description                 Displays or hides the TV's data service menu.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_DATA_SERVICE (230)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVDataServiceKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
