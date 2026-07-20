import useKeyDown from "./useKeyDown.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF13KeyDown(callback, enabled = true, target) {
    useKeyDown("F13", callback, enabled, target);
};
