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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useColorF4GreyKeyDown(callback, enabled = true) {
    useKeyDown("ColorF4Grey", callback, enabled);
};
