import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F14".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F14"
 * Description                 The F14 key.
 * Virtual Keycode
 *     Windows                 VK_F14 (0x7D)
 *     Mac                     kVK_F14 (0x6B)
 *     Linux                   GDK_KEY_F14 (0xFFCB)
 *                             Qt::Key_F14 (0x0100003D)
 *     Android                 KEYCODE_F14 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF14KeyUp(callback, enabled = true, target) {
    useKeyUp("F14", callback, enabled, target);
};
