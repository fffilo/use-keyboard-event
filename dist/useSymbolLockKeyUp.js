import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "SymbolLock".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "SymbolLock"
 * Description                 The Symbol Lock key.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSymbolLockKeyUp(callback, enabled = true) {
    useKeyUp("SymbolLock", callback, enabled);
};
