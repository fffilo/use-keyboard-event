import useKeyUp from "./useKeyUp.js";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchMailKeyUp(callback, enabled = true) {
    useKeyUp("LaunchMail", callback, enabled);
};
