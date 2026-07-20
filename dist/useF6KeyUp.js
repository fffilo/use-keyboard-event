import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F6".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F6"
 * Description                 The F6 key.
 * Virtual Keycode
 *     Windows                 VK_F6 (0x75)
 *     Mac                     kVK_F6 (0x61)
 *     Linux                   GDK_KEY_F6 (0xFFC3)
 *                             Qt::Key_F6 (0x01000035)
 *     Android                 KEYCODE_F6 (136)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useF6KeyUp(callback, enabled = true) {
    useKeyUp("F6", callback, enabled);
};
