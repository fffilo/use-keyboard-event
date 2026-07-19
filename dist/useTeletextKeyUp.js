import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Teletext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Teletext"
 * Description                 Toggles display of teletext [https://en.wikipedia.org/wiki/Teletext], if available.
 * Virtual Keycode
 *     Windows                 VK_TELETEXT (null)
 *     Android                 KEYCODE_TV_TELETEXT (233)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTeletextKeyUp(callback, enabled = true) {
    useKeyUp("Teletext", callback, enabled);
};
