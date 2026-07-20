import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "ColorF5Brown".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ColorF5Brown"
 * Description                 General-purpose media function key, color-coded brown. This has index 5 among the colored keys.
 * Virtual Keycode
 *     Windows                 VK_COLORED_KEY_5 (null)
 *     Android                 KEYCODE_PROG_BROWN (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useColorF5BrownKeyDown(callback, enabled = true, target) {
    useKeyDown("ColorF5Brown", callback, enabled, target);
};
