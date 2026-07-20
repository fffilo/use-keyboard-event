/**
 * React useKeyDown wrapper for key "Key12".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "Key12"
 * Description                 The 12 key found on certain media numeric keypads.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useKey12KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
