import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F5".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF5KeyUp(callback, enabled = true, target) {
    useKeyUp("F5", callback, enabled, target);
};
