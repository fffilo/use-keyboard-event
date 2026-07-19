import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "LaunchApplication13".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication13"
 * Description                 The 13th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchC (0x1008FF4C)
 *                             Qt::Key_LaunchC (0x010000AE)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication13KeyDown(callback, enabled = true) {
    useKeyDown("LaunchApplication13", callback, enabled);
};
