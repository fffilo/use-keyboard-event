import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchApplication15".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication15"
 * Description                 The 15th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchE (0x1008FF4E)
 *                             Qt::Key_LaunchE (0x010000B0)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication15KeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchApplication15", callback, enabled, target);
};
