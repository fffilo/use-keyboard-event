import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Select".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Select"
 * Description                 The Select key.
 * Virtual Keycode
 *     Windows                 VK_SELECT (0x29)
 *     Linux                   GDK_KEY_Select (0xFF60)
 *     Android                 KEYCODE_BUTTON_SELECT (109)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSelectKeyUp(callback, enabled = true) {
    useKeyUp("Select", callback, enabled);
};
