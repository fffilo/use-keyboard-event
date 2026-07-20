/**
 * React useKeyUp wrapper for key "GuideNextDay".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "GuideNextDay"
 * Description                 If the guide is currently displayed, this button tells the guide to display the next day's content.
 * Virtual Keycode
 *     Windows                 VK_NEXT_DAY (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useGuideNextDayKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
