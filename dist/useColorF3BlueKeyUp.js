import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ColorF3Blue".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ColorF3Blue"
 * Description                 General-purpose media function key, color-coded blue. This has index 3 among the colored keys.
 * Virtual Keycode
 *     Windows                 VK_COLORED_KEY_3 (null)
 *     Android                 KEYCODE_PROG_BLUE (186)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useColorF3BlueKeyUp(callback, enabled = true, target) {
    useKeyUp("ColorF3Blue", callback, enabled, target);
};
