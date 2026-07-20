import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F17".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF17KeyUp(callback, enabled = true, target) {
    useKeyUp("F17", callback, enabled, target);
};
