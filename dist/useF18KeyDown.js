import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "F18".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F18"
 * Description                 The F18 key.
 * Virtual Keycode
 *     Windows                 VK_F18 (0x81)
 *     Mac                     kVK_F18 (0x4F)
 *     Linux                   GDK_KEY_F18 (0xFFCF)
 *                             Qt::Key_F18 (0x01000041)
 *     Android                 KEYCODE_F18 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF18KeyDown(callback, enabled = true, target) {
    useKeyDown("F18", callback, enabled, target);
};
