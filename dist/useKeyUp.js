import useKeyboardEvent from "./useKeyboardEvent.js";

/**
 * React key up event hook: registers a `keyup` event listener on the
 * specified event target.
 *
 * @param  {String|Function} key       `KeyboardEvent.key` value or predicate function used to match events.
 * @param  {Function}        callback  Invoked when the keyboard event matches.
 * @param  {Boolean}         enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget}     target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useKeyUp(key, callback, enabled = true, target) {
    return useKeyboardEvent("keyup", key, callback, enabled, target);
};
