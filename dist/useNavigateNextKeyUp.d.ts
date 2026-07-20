/**
 * React useKeyUp wrapper for key "NavigateNext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigateNext"
 * Description                 Navigates to the next item.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_NEXT (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useNavigateNextKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
