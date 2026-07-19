import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "LaunchApplication15".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication15"
 * Description                 The 15th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchE (0x1008FF4E)
 *                             Qt::Key_LaunchE (0x010000B0)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication15KeyUp(callback, enabled = true) {
    useKeyUp("LaunchApplication15", callback, enabled);
};
