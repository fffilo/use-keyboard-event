import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchApplication4".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication4"
 * Description                 The fourth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch3 (0x1008FF43)
 *                             Qt::Key_Launch3 (0x010000A5)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication4KeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchApplication4", callback, enabled, target);
};
