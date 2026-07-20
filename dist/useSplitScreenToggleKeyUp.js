import useKeyUp from "./useKeyUp.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSplitScreenToggleKeyUp(callback, enabled = true, target) {
    useKeyUp("SplitScreenToggle", callback, enabled, target);
};
