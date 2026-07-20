import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Symbol".
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
export default function useSymbolKeyDown(callback, enabled = true) {
    useKeyDown("Symbol", callback, enabled);
};
