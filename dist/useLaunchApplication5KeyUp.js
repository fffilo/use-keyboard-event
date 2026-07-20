import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchApplication5".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication5"
 * Description                 The fifth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch4 (0x1008FF44)
 *                             Qt::Key_Launch4 (0x010000A6)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication5KeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchApplication5", callback, enabled, target);
};
