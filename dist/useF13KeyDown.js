import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "F13".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F13"
 * Description                 The F13 key.
 * Virtual Keycode
 *     Windows                 VK_F13 (0x7C)
 *     Mac                     kVK_F13 (0x69)
 *     Linux                   GDK_KEY_F13 (0xFFCA)
 *                             Qt::Key_F13 (0x0100003C)
 *     Android                 KEYCODE_F13 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF13KeyDown(callback, enabled = true) {
    useKeyDown("F13", callback, enabled);
};
