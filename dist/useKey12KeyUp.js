import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Key12".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "Key12"
 * Description                 The 12 key found on certain media numeric keypads.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useKey12KeyUp(callback, enabled = true, target) {
    useKeyUp("Key12", callback, enabled, target);
};
