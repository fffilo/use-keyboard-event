import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchApplication7".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication7"
 * Description                 The seventh generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch6 (0x1008FF46)
 *                             Qt::Key_Launch6 (0x010000A8)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication7KeyDown(callback, enabled = true) {
    useKeyDown("LaunchApplication7", callback, enabled);
};
