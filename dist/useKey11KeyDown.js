import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Key11".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "Key11"
 * Description                 The 11 key found on certain media numeric keypads.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useKey11KeyDown(callback, enabled = true) {
    useKeyDown("Key11", callback, enabled);
};
