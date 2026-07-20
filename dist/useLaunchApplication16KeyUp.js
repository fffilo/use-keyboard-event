import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchApplication16".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication16"
 * Description                 The 16th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchF (0x1008FF4F)
 *                             Qt::Key_LaunchF (0x010000B1)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication16KeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchApplication16", callback, enabled, target);
};
