import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Symbol".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "Symbol"
 * Description                 The Symbol modifier key (found on certain virtual keyboards).
 * Virtual Keycode
 *     Android                 KEYCODE_SYM (63)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSymbolKeyUp(callback, enabled = true) {
    useKeyUp("Symbol", callback, enabled);
};
