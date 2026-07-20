import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVTimer".
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
export default function useTVTimerKeyDown(callback, enabled = true, target) {
    useKeyDown("TVTimer", callback, enabled, target);
};
