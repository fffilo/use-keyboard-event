import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchPhone".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchPhone"
 * Description                 The Phone key. Opens the phone dialer application (if one is present).
 * Virtual Keycode
 *     Linux                   GDK_KEY_Phone (0x1008FF6E)
 *                             Qt::Key_Phone (0x010000E3)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchPhoneKeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchPhone", callback, enabled, target);
};
