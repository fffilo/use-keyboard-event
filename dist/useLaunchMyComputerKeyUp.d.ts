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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchMyComputerKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
