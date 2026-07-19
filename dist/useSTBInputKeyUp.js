import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "STBInput".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "STBInput"
 * Description                 Cycles among input modes on an external set-top box (STB).
 * Virtual Keycode
 *     Android                 KEYCODE_STB_INPUT (180)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSTBInputKeyUp(callback, enabled = true) {
    useKeyUp("STBInput", callback, enabled);
};
