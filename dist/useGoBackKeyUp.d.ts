/**
 * React useKeyUp wrapper for key "GoBack".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "GoBack"
 * Description                 The Back button.
 * Virtual Keycode
 *     Android                 KEYCODE_BACK (4)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useGoBackKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
