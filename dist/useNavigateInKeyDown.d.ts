/**
 * React useKeyDown wrapper for key "NavigateIn".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigateIn"
 * Description                 Navigates into a submenu or option.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_IN (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useNavigateInKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
