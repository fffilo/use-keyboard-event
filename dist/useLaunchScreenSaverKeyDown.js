import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "LaunchScreenSaver".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchScreenSaver"
 * Description                 The Screen Saver key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_ScreenSaver (0x1008FF2D)
 *                             Qt::Key_ScreenSaver (0x010000BA)
 *
 * Firefox introduced support for this key in Firefox 37. Prior to that, this key was reported as "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchScreenSaverKeyDown(callback, enabled = true) {
    useKeyDown("LaunchScreenSaver", callback, enabled);
};
