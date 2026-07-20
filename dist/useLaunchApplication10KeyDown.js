import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchApplication10".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication10"
 * Description                 The 10th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch9 (0x1008FF49)
 *                             Qt::Key_Launch9 (0x010000AB)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication10KeyDown(callback, enabled = true) {
    useKeyDown("LaunchApplication10", callback, enabled);
};
