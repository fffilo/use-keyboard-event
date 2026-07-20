import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Key11".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "Key11"
 * Description                 The 11 key found on certain media numeric keypads.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useKey11KeyUp(callback, enabled = true) {
    useKeyUp("Key11", callback, enabled);
};
