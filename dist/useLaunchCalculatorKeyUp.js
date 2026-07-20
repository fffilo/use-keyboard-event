import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchCalculator".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchCalculator"
 * Description                 The Calculator key, often labeled with an icon. This is often used as a generic application launcher key (APPCOMMAND_LAUNCH_APP2).
 * Virtual Keycode
 *     Windows                 APPCOMMAND_LAUNCH_APP2 (null)
 *     Linux                   GDK_KEY_Calculator (0x1008FF1D)
 *                             Qt::Key_Calculator (0x010000CB)
 *     Android                 KEYCODE_CALCULATOR (210)
 *
 * Firefox introduced support for this key in Firefox 37. Prior to that, this key was reported as "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchCalculatorKeyUp(callback, enabled = true) {
    useKeyUp("LaunchCalculator", callback, enabled);
};
