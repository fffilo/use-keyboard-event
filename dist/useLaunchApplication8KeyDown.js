import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchApplication8".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication8"
 * Description                 The eighth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch7 (0x1008FF47)
 *                             Qt::Key_Launch7 (0x010000A9)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication8KeyDown(callback, enabled = true, target) {
    useKeyDown("LaunchApplication8", callback, enabled, target);
};
