import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "LaunchApplication8".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication8"
 * Description                 The eighth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch7 (0x1008FF47)
 *                             Qt::Key_Launch7 (0x010000A9)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication8KeyUp(callback, enabled = true) {
    useKeyUp("LaunchApplication8", callback, enabled);
};
