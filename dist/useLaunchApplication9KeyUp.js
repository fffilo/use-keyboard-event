import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchApplication9".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication9"
 * Description                 The ninth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch8 (0x1008FF48)
 *                             Qt::Key_Launch8 (0x010000AA)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication9KeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchApplication9", callback, enabled, target);
};
