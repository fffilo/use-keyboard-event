import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "FnLock".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "FnLock"
 * Description                 The FnLock or F-Lock (Function Lock) key.Toggles the function key mode described by "Fn" on and off. Often handled in hardware so that events aren't generated for this key.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFnLockKeyDown(callback, enabled = true) {
    useKeyDown("FnLock", callback, enabled);
};
