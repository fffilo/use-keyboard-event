import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchCalendar".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchCalendar"
 * Description                 The Calendar key. Often labeled with an icon.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Calendar (0x1008FF20)
 *                             Qt::Key_Calendar (0x010000E4)
 *     Android                 KEYCODE_CALENDAR (208)
 *
 * Firefox introduced support for this key in Firefox 37. Prior to that, this key was reported as "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchCalendarKeyDown(callback, enabled = true) {
    useKeyDown("LaunchCalendar", callback, enabled);
};
