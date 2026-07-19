import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "LaunchApplication16".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication16"
 * Description                 The 16th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchF (0x1008FF4F)
 *                             Qt::Key_LaunchF (0x010000B1)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication16KeyDown(callback, enabled = true) {
    useKeyDown("LaunchApplication16", callback, enabled);
};
