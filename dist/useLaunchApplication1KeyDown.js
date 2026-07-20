import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchApplication1".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication1"
 * Description                 The first generic application launcher button.
 * Virtual Keycode
 *     Windows                 VK_LAUNCH_APP1 (0xB6)
 *                             APPCOMMAND_LAUNCH_APP1 (null)
 *     Linux                   GDK_KEY_Launch0 (0x1008FF40)
 *                             Qt::Key_Launch0 (0x010000A2)
 *
 * Google Chrome 57 and earlier returned "LaunchMyComputer" instead of "LaunchApplication1". See Chrome Bug 612743 [https://crbug.com/612743] for more information.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication1KeyDown(callback, enabled = true, target) {
    useKeyDown("LaunchApplication1", callback, enabled, target);
};
