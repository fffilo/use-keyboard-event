/**
 * React key up event hook: registers a `keyup` event listener on the
 * specified event target.
 *
 * @param key       `KeyboardEvent.key` value or predicate function used to match events.
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useKeyUp(
    key: string | ((event: KeyboardEvent) => boolean),
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
