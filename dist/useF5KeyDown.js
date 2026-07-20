import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "F5".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F5"
 * Description                 The F5 key.
 * Virtual Keycode
 *     Windows                 VK_F5 (0x74)
 *     Mac                     kVK_F5 (0x60)
 *     Linux                   GDK_KEY_F5 (0xFFC2)
 *                             Qt::Key_F5 (0x01000034)
 *     Android                 KEYCODE_F5 (135)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF5KeyDown(callback, enabled = true) {
    useKeyDown("F5", callback, enabled);
};
