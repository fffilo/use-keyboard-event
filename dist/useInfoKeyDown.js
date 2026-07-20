import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Info".
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
export default function useInfoKeyDown(callback, enabled = true) {
    useKeyDown("Info", callback, enabled);
};
