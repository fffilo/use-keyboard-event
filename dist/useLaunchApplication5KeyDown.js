import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchApplication5".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication5"
 * Description                 The fifth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch4 (0x1008FF44)
 *                             Qt::Key_Launch4 (0x010000A6)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication5KeyDown(callback, enabled = true) {
    useKeyDown("LaunchApplication5", callback, enabled);
};
