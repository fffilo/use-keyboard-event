import useKeyboardEvent from "./useKeyboardEvent";

/**
 * Key down event react hook.
 *
 * @param  {String|Function} key
 * @param  {Function}        callback
 * @param  {EventTarget}     target
 * @param  {Boolean}         enabled
 * @return {Void}
 */
export default function useKeyDown(key, callback, enabled = true, target) {
    return useKeyboardEvent("keydown", key, callback, enabled, target);
};
