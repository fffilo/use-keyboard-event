import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchApplication12".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication12"
 * Description                 The 12th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchB (0x1008FF4B)
 *                             Qt::Key_LaunchB (0x010000AD)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication12KeyDown(callback, enabled = true, target) {
    useKeyDown("LaunchApplication12", callback, enabled, target);
};
