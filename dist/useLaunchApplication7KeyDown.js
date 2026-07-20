import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchApplication7".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication7"
 * Description                 The seventh generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch6 (0x1008FF46)
 *                             Qt::Key_Launch6 (0x010000A8)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication7KeyDown(callback, enabled = true, target) {
    useKeyDown("LaunchApplication7", callback, enabled, target);
};
