import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "F7".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F7"
 * Description                 The F7 key.
 * Virtual Keycode
 *     Windows                 VK_F7 (0x76)
 *     Mac                     kVK_F7 (0x62)
 *     Linux                   GDK_KEY_F7 (0xFFC4)
 *                             Qt::Key_F7 (0x01000036)
 *     Android                 KEYCODE_F7 (137)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF7KeyUp(callback, enabled = true) {
    useKeyUp("F7", callback, enabled);
};
