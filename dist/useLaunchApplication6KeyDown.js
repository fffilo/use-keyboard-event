import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchApplication6".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication6"
 * Description                 The sixth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch5 (0x1008FF45)
 *                             Qt::Key_Launch5 (0x010000A7)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchApplication6KeyDown(callback, enabled = true, target) {
    useKeyDown("LaunchApplication6", callback, enabled, target);
};
