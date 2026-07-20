import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "F17".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F17"
 * Description                 The F17 key.
 * Virtual Keycode
 *     Windows                 VK_F17 (0x80)
 *     Mac                     kVK_F17 (0x40)
 *     Linux                   GDK_KEY_F17 (0xFFCE)
 *                             Qt::Key_F17 (0x01000040)
 *     Android                 KEYCODE_F17 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF17KeyDown(callback, enabled = true) {
    useKeyDown("F17", callback, enabled);
};
