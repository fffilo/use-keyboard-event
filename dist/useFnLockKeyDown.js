import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "FnLock".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "FnLock"
 * Description                 The FnLock or F-Lock (Function Lock) key.Toggles the function key mode described by "Fn" on and off. Often handled in hardware so that events aren't generated for this key.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFnLockKeyDown(callback, enabled = true, target) {
    useKeyDown("FnLock", callback, enabled, target);
};
