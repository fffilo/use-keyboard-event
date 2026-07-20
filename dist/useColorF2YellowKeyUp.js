import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ColorF2Yellow".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ColorF2Yellow"
 * Description                 General-purpose media function key, color-coded yellow. This has index 2 among the colored keys.
 * Virtual Keycode
 *     Windows                 VK_COLORED_KEY_2 (null)
 *     Android                 KEYCODE_PROG_YELLOW (185)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useColorF2YellowKeyUp(callback, enabled = true) {
    useKeyUp("ColorF2Yellow", callback, enabled);
};
