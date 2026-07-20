import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ColorF0Red".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ColorF0Red"
 * Description                 General-purpose media function key, color-coded red. This has index 0 among the colored keys.
 * Virtual Keycode
 *     Windows                 VK_COLORED_KEY_0 (null)
 *     Android                 KEYCODE_PROG_RED (183)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useColorF0RedKeyUp(callback, enabled = true) {
    useKeyUp("ColorF0Red", callback, enabled);
};
