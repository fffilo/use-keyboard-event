import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "LaunchApplication3".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication3"
 * Description                 The third generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch2 (0x1008FF42)
 *                             Qt::Key_Launch2 (0x010000A4)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication3KeyUp(callback, enabled = true) {
    useKeyUp("LaunchApplication3", callback, enabled);
};
