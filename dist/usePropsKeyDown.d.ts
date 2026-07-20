/**
 * React useKeyDown wrapper for key "Props".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Props"
 * Description                 The Props (Properties) key.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePropsKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
