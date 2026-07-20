import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Props".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Props"
 * Description                 The Props (Properties) key.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePropsKeyUp(callback, enabled = true, target) {
    useKeyUp("Props", callback, enabled, target);
};
