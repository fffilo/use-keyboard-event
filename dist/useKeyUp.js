import useKeyboardEvent from "./useKeyboardEvent.js";

/**
 * Key up event react hook.
 *
 * @param  {String|Function} key
 * @param  {Function}        callback
 * @param  {EventTarget}     target
 * @param  {Boolean}         enabled
 * @return {Void}
 */
export default function useKeyUp(key, callback, enabled = true, target) {
    return useKeyboardEvent("keyup", key, callback, enabled, target);
};
