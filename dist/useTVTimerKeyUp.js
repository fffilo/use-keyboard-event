import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "TVTimer".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVTimer"
 * Description                 Timer programming button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_TIMER_PROGRAMMING (258)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useTVTimerKeyUp(callback, enabled = true, target) {
    useKeyUp("TVTimer", callback, enabled, target);
};
