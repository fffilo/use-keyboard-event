/**
 * React keyboard event hook: registers a keyboard event listener on the
 * specified event target.
 *
 * @param eventName  Keyboard event type.
 * @param key        `KeyboardEvent.key` value or predicate function used to match events.
 * @param callback   Invoked when the keyboard event matches.
 * @param enabled    Enables or disables the listener (defaults to `true`).
 * @param target     Event target (defaults to `document`).
 */
export default function useKeyboardEvent(
    eventName: "keydown" | "keyup",
    key: string | ((event: KeyboardEvent) => boolean),
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
