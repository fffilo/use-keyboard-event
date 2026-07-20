import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Key11".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "Key11"
 * Description                 The 11 key found on certain media numeric keypads.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useKey11KeyDown(callback, enabled = true, target) {
    useKeyDown("Key11", callback, enabled, target);
};
