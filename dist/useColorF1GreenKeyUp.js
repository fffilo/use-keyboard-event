import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ColorF1Green".
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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useColorF1GreenKeyUp(callback, enabled = true) {
    useKeyUp("ColorF1Green", callback, enabled);
};
