import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "SymbolLock".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "SymbolLock"
 * Description                 The Symbol Lock key.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSymbolLockKeyUp(callback, enabled = true, target) {
    useKeyUp("SymbolLock", callback, enabled, target);
};
