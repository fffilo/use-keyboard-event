import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F1".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F1"
 * Description                 The first general-purpose function key, F1.
 * Virtual Keycode
 *     Windows                 VK_F1 (0x70)
 *     Mac                     kVK_F1 (0x7A)
 *     Linux                   GDK_KEY_F1 (0xFFBE)
 *                             GDK_KEY_KP_F1 (0xFF91)
 *                             Qt::Key_F1 (0x01000030)
 *     Android                 KEYCODE_F1 (131)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF1KeyUp(callback, enabled = true, target) {
    useKeyUp("F1", callback, enabled, target);
};
