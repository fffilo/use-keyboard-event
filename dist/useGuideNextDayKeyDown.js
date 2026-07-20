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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useGuideNextDayKeyDown(callback, enabled = true) {
    useKeyDown("GuideNextDay", callback, enabled);
};
