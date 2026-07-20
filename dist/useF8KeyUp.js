import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F8".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F8"
 * Description                 The F8 key.
 * Virtual Keycode
 *     Windows                 VK_F8 (0x77)
 *     Mac                     kVK_F8 (0x64)
 *     Linux                   GDK_KEY_F8 (0xFFC5)
 *                             Qt::Key_F8 (0x01000037)
 *     Android                 KEYCODE_F8 (138)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF8KeyUp(callback, enabled = true) {
    useKeyUp("F8", callback, enabled);
};
