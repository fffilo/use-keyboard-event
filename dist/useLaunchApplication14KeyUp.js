import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchApplication14".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication14"
 * Description                 The 14th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchD (0x1008FF4D)
 *                             Qt::Key_LaunchD (0x010000AF)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication14KeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchApplication14", callback, enabled, target);
};
