import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchApplication14".
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
export default function useLaunchApplication14KeyDown(callback, enabled = true) {
    useKeyDown("LaunchApplication14", callback, enabled);
};
