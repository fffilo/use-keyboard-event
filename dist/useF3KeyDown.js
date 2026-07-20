import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "F3".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F3"
 * Description                 The F3 key.
 * Virtual Keycode
 *     Windows                 VK_F3 (0x72)
 *     Mac                     kVK_F3 (0x63)
 *     Linux                   GDK_KEY_F3 (0xFFC0)
 *                             GDK_KEY_KP_F3 (0xFF93)
 *                             Qt::Key_F3 (0x01000032)
 *     Android                 KEYCODE_F3 (133)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF3KeyDown(callback, enabled = true, target) {
    useKeyDown("F3", callback, enabled, target);
};
