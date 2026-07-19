import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "F15".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F15"
 * Description                 The F15 key.
 * Virtual Keycode
 *     Windows                 VK_F15 (0x7E)
 *     Mac                     kVK_F15 (0x71)
 *     Linux                   GDK_KEY_F15 (0xFFCC)
 *                             Qt::Key_F15 (0x0100003E)
 *     Android                 KEYCODE_F15 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF15KeyUp(callback, enabled = true) {
    useKeyUp("F15", callback, enabled);
};
