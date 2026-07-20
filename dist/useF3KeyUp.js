import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F3".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F3"
 * Description                 The F3 key.
 * Virtual Keycode
 *     Windows                 VK_F3 (0x72)
 *     Mac                     kVK_F3 (0x63)
 *     Linux                   GDK_KEY_F3 (0xFFC0)
 *                             GDK_KEY_KP_F3 (0xFF93)
 *                             Qt::Key_F3 (0x01000032)
 *     Android                 KEYCODE_F3 (133)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF3KeyUp(callback, enabled = true) {
    useKeyUp("F3", callback, enabled);
};
