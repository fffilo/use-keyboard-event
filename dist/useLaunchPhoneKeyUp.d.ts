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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchPhoneKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
