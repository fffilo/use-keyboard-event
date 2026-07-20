import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "ColorF4Grey".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ColorF4Grey"
 * Description                 General-purpose media function key, color-coded grey. This has index 4 among the colored keys.
 * Virtual Keycode
 *     Windows                 VK_COLORED_KEY_4 (null)
 *     Android                 KEYCODE_PROG_GREY (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useColorF4GreyKeyDown(callback, enabled = true, target) {
    useKeyDown("ColorF4Grey", callback, enabled, target);
};
