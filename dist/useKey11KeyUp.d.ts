/**
 * React useKeyUp wrapper for key "Key11".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "Key11"
 * Description                 The 11 key found on certain media numeric keypads.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useKey11KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
