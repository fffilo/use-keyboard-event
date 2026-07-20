import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F18".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F18"
 * Description                 The F18 key.
 * Virtual Keycode
 *     Windows                 VK_F18 (0x81)
 *     Mac                     kVK_F18 (0x4F)
 *     Linux                   GDK_KEY_F18 (0xFFCF)
 *                             Qt::Key_F18 (0x01000041)
 *     Android                 KEYCODE_F18 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF18KeyUp(callback, enabled = true) {
    useKeyUp("F18", callback, enabled);
};
