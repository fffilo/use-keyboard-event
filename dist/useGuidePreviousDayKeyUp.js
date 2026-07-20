import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "GuidePreviousDay".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "GuidePreviousDay"
 * Description                 If the guide is currently displayed, this button tells the guide to display the previous day's content.
 * Virtual Keycode
 *     Windows                 VK_PREV_DAY (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useGuidePreviousDayKeyUp(callback, enabled = true, target) {
    useKeyUp("GuidePreviousDay", callback, enabled, target);
};
