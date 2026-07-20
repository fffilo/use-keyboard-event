import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "SymbolLock".
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
export default function useSymbolLockKeyDown(callback, enabled = true, target) {
    useKeyDown("SymbolLock", callback, enabled, target);
};
