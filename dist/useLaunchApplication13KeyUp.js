import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchApplication13".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication13"
 * Description                 The 13th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchC (0x1008FF4C)
 *                             Qt::Key_LaunchC (0x010000AE)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication13KeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchApplication13", callback, enabled, target);
};
