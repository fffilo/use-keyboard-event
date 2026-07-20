import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchApplication2".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication2"
 * Description                 The second generic application launcher button.
 * Virtual Keycode
 *     Windows                 VK_LAUNCH_APP2 (0xB7)
 *                             APPCOMMAND_LAUNCH_APP2 (null)
 *     Linux                   GDK_KEY_Launch1 (0x1008FF41)
 *                             Qt::Key_Launch1 (0x010000A3)
 *
 * Google Chrome 57 and earlier returned "LaunchCalculator" instead of "LaunchApplication2". See Chrome Bug 612743 [https://crbug.com/612743] for more information.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication2KeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchApplication2", callback, enabled, target);
};
