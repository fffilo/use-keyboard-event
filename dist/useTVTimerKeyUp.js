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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVTimerKeyUp(callback, enabled = true) {
    useKeyUp("TVTimer", callback, enabled);
};
