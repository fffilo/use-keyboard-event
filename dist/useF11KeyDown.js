import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "F11".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF11KeyDown(callback, enabled = true, target) {
    useKeyDown("F11", callback, enabled, target);
};
