import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "LaunchApplication11".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication11"
 * Description                 The 11th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchA (0x1008FF4A)
 *                             Qt::Key_LaunchA (0x010000AC)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication11KeyUp(callback, enabled = true) {
    useKeyUp("LaunchApplication11", callback, enabled);
};
