import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchApplication3".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication3"
 * Description                 The third generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch2 (0x1008FF42)
 *                             Qt::Key_Launch2 (0x010000A4)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication3KeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchApplication3", callback, enabled, target);
};
