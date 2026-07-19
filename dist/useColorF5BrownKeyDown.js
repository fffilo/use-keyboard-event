import useKeyDown from "./useKeyDown";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useColorF5BrownKeyDown(callback, enabled = true) {
    useKeyDown("ColorF5Brown", callback, enabled);
};
