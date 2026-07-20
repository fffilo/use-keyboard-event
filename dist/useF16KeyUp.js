import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F16".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F16"
 * Description                 The F16 key.
 * Virtual Keycode
 *     Windows                 VK_F16 (0x7F)
 *     Mac                     kVK_F16 (0x6A)
 *     Linux                   GDK_KEY_F16 (0xFFCD)
 *                             Qt::Key_F16 (0x0100003F)
 *     Android                 KEYCODE_F16 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF16KeyUp(callback, enabled = true) {
    useKeyUp("F16", callback, enabled);
};
