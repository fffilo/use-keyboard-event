/**
 * React useKeyUp wrapper for key "LaunchMail".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchMail"
 * Description                 The Mail key. Often labeled with an icon.
 * Virtual Keycode
 *     Windows                 VK_LAUNCH_MAIL (0xB4)
 *                             APPCOMMAND_LAUNCH_MAIL (null)
 *     Linux                   GDK_KEY_Mail (0x1008FF19)
 *                             Qt::Key_LaunchMail (0x010000A0)
 *     Android                 KEYCODE_ENVELOPE (65)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchMailKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
