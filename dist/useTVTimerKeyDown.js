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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVTimerKeyDown(callback, enabled = true) {
    useKeyDown("TVTimer", callback, enabled);
};
