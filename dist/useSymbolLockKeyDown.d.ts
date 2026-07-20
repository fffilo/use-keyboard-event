/**
 * React useKeyDown wrapper for key "SymbolLock".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "SymbolLock"
 * Description                 The Symbol Lock key.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSymbolLockKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
