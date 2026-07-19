import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "LaunchApplication14".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication14"
 * Description                 The 14th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchD (0x1008FF4D)
 *                             Qt::Key_LaunchD (0x010000AF)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication14KeyUp(callback, enabled = true) {
    useKeyUp("LaunchApplication14", callback, enabled);
};
