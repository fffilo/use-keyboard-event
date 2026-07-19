import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "F20".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F20"
 * Description                 The F20 key.
 * Virtual Keycode
 *     Windows                 VK_F20 (0x83)
 *     Mac                     kVK_F20 (0x5A)
 *     Linux                   GDK_KEY_F20 (0xFFD1)
 *                             Qt::Key_F20 (0x01000043)
 *     Android                 KEYCODE_F20 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF20KeyDown(callback, enabled = true) {
    useKeyDown("F20", callback, enabled);
};
