import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "GuideNextDay".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "GuideNextDay"
 * Description                 If the guide is currently displayed, this button tells the guide to display the next day's content.
 * Virtual Keycode
 *     Windows                 VK_NEXT_DAY (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useGuideNextDayKeyDown(callback, enabled = true, target) {
    useKeyDown("GuideNextDay", callback, enabled, target);
};
