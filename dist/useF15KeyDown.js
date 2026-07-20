import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "F15".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF15KeyDown(callback, enabled = true, target) {
    useKeyDown("F15", callback, enabled, target);
};
