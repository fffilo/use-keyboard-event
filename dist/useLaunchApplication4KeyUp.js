import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "LaunchApplication4".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication4"
 * Description                 The fourth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch3 (0x1008FF43)
 *                             Qt::Key_Launch3 (0x010000A5)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication4KeyUp(callback, enabled = true) {
    useKeyUp("LaunchApplication4", callback, enabled);
};
