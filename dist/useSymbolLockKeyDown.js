import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "SymbolLock".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "SymbolLock"
 * Description                 The Symbol Lock key.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSymbolLockKeyDown(callback, enabled = true) {
    useKeyDown("SymbolLock", callback, enabled);
};
