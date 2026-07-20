import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchApplication9".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication9"
 * Description                 The ninth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch8 (0x1008FF48)
 *                             Qt::Key_Launch8 (0x010000AA)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication9KeyDown(callback, enabled = true) {
    useKeyDown("LaunchApplication9", callback, enabled);
};
