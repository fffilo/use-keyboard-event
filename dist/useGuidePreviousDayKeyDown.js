import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "GuidePreviousDay".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "GuidePreviousDay"
 * Description                 If the guide is currently displayed, this button tells the guide to display the previous day's content.
 * Virtual Keycode
 *     Windows                 VK_PREV_DAY (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useGuidePreviousDayKeyDown(callback, enabled = true) {
    useKeyDown("GuidePreviousDay", callback, enabled);
};
