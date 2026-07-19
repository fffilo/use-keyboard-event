import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "SplitScreenToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "SplitScreenToggle"
 * Description                 Toggles split screen display mode on and off.
 * Virtual Keycode
 *     Windows                 VK_SPLIT_SCREEN_TOGGLE (null)
 *     Linux                   GDK_KEY_SplitScreen (0x1008FF7D)
 *                             Qt::Key_SplitScreen (0x010000ED)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSplitScreenToggleKeyUp(callback, enabled = true) {
    useKeyUp("SplitScreenToggle", callback, enabled);
};
