import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Info".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Info"
 * Description                 Toggles the display of information about the currently selected content, program, or media.
 * Virtual Keycode
 *     Windows                 VK_INFO (null)
 *     Linux                   Qt::Key_Info (0x0100011B)
 *     Android                 KEYCODE_INFO (165)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useInfoKeyUp(callback, enabled = true) {
    useKeyUp("Info", callback, enabled);
};
