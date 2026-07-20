import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchMyComputer".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchMyComputer"
 * Description                 The My Computer key on Windows keyboards. This is often used as a generic application launcher key (APPCOMMAND_LAUNCH_APP1).
 * Virtual Keycode
 *     Windows                 APPCOMMAND_LAUNCH_APP1 (null)
 *     Linux                   GDK_KEY_MyComputer (0x1008FF33)
 *                             GDK_KEY_Explorer (0x1008FF5D)
 *
 * Firefox introduced support for this key in Firefox 37. Prior to that, this key was reported as "Unidentified".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchMyComputerKeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchMyComputer", callback, enabled, target);
};
