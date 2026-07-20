import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "ColorF1Green".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ColorF1Green"
 * Description                 General-purpose media function key, color-coded green. This has index 1 among the colored keys.
 * Virtual Keycode
 *     Windows                 VK_COLORED_KEY_1 (null)
 *     Android                 KEYCODE_PROG_GREEN (184)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useColorF1GreenKeyDown(callback, enabled = true, target) {
    useKeyDown("ColorF1Green", callback, enabled, target);
};
