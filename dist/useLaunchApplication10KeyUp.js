import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchApplication10".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication10"
 * Description                 The 10th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch9 (0x1008FF49)
 *                             Qt::Key_Launch9 (0x010000AB)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication10KeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchApplication10", callback, enabled, target);
};
