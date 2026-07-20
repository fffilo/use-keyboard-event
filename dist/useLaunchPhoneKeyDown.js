import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchPhone".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchPhone"
 * Description                 The Phone key. Opens the phone dialer application (if one is present).
 * Virtual Keycode
 *     Linux                   GDK_KEY_Phone (0x1008FF6E)
 *                             Qt::Key_Phone (0x010000E3)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchPhoneKeyDown(callback, enabled = true) {
    useKeyDown("LaunchPhone", callback, enabled);
};
