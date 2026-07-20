/**
 * React useKeyDown wrapper for key "NavigateOut".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NavigateOut"
 * Description                 Navigates out of the current screen or menu.
 * Virtual Keycode
 *     Android                 KEYCODE_NAVIGATE_OUT (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useNavigateOutKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
