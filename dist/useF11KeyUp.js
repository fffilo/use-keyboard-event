import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F11".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F11"
 * Description                 The F11 key.
 * Virtual Keycode
 *     Windows                 VK_F11 (0x7A)
 *     Mac                     kVK_F11 (0x67)
 *     Linux                   GDK_KEY_F11 (0xFFC8)
 *                             Qt::Key_F11 (0x0100003A)
 *     Android                 KEYCODE_F11 (141)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF11KeyUp(callback, enabled = true) {
    useKeyUp("F11", callback, enabled);
};
