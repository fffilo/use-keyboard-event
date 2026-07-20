/**
 * React useKeyDown wrapper for key "LaunchCalculator".
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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchCalculatorKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
