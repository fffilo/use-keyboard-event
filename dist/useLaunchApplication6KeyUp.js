import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "LaunchApplication6".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication6"
 * Description                 The sixth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch5 (0x1008FF45)
 *                             Qt::Key_Launch5 (0x010000A7)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchApplication6KeyUp(callback, enabled = true) {
    useKeyUp("LaunchApplication6", callback, enabled);
};
