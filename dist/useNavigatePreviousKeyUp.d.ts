/**
 * React useKeyUp wrapper for key "NavigatePrevious".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigatePrevious"
 * Description                 Navigates to the previous item.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_PREVIOUS (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useNavigatePreviousKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
