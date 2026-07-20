import useKeyboardEvent from "./useKeyboardEvent.js";

/**
 * React key down event hook: registers a `keydown` event listener on the
 * specified event target.
 *
 * @param  {String|Function} key       `KeyboardEvent.key` value or predicate function used to match events.
 * @param  {Function}        callback  Invoked when the keyboard event matches.
 * @param  {Boolean}         enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget}     target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useKeyDown(key, callback, enabled = true, target) {
    return useKeyboardEvent("keydown", key, callback, enabled, target);
};
