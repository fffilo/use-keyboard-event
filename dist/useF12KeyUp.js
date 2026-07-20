import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F12".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F12"
 * Description                 The F12 key.
 * Virtual Keycode
 *     Windows                 VK_F12 (0x7B)
 *     Mac                     kVK_F12 (0x6F)
 *     Linux                   GDK_KEY_F12 (0xFFC9)
 *                             Qt::Key_F12 (0x0100003B)
 *     Android                 KEYCODE_F12 (142)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF12KeyUp(callback, enabled = true, target) {
    useKeyUp("F12", callback, enabled, target);
};
