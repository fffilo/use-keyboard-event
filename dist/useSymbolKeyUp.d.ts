/**
 * React useKeyUp wrapper for key "Symbol".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "Symbol"
 * Description                 The Symbol modifier key (found on certain virtual keyboards).
 * Virtual Keycode
 *     Android                 KEYCODE_SYM (63)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSymbolKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
