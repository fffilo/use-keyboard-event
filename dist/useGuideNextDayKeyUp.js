import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "GuideNextDay".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "GuideNextDay"
 * Description                 If the guide is currently displayed, this button tells the guide to display the next day's content.
 * Virtual Keycode
 *     Windows                 VK_NEXT_DAY (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useGuideNextDayKeyUp(callback, enabled = true) {
    useKeyUp("GuideNextDay", callback, enabled);
};
