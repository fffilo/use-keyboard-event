import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Guide".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Guide"
 * Description                 Toggles the display of the program or content guide.
 * Virtual Keycode
 *     Windows                 VK_GUIDE (null)
 *     Linux                   Qt::Key_Guide (0x0100011A)
 *     Android                 KEYCODE_GUIDE (172)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useGuideKeyUp(callback, enabled = true) {
    useKeyUp("Guide", callback, enabled);
};
