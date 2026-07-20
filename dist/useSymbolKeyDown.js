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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSymbolKeyDown(callback, enabled = true, target) {
    useKeyDown("Symbol", callback, enabled, target);
};
