import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "F2".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F2"
 * Description                 The F2 key.
 * Virtual Keycode
 *     Windows                 VK_F2 (0x71)
 *     Mac                     kVK_F2 (0x78)
 *     Linux                   GDK_KEY_F2 (0xFFBF)
 *                             GDK_KEY_KP_F2 (0xFF92)
 *                             Qt::Key_F2 (0x01000031)
 *     Android                 KEYCODE_F2 (132)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF2KeyUp(callback, enabled = true) {
    useKeyUp("F2", callback, enabled);
};
