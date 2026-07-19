import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "LaunchApplication12".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication12"
 * Description                 The 12th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchB (0x1008FF4B)
 *                             Qt::Key_LaunchB (0x010000AD)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication12KeyUp(callback, enabled = true) {
    useKeyUp("LaunchApplication12", callback, enabled);
};
