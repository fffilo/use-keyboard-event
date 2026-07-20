import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "F10".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F10"
 * Description                 The F10 key.
 * Virtual Keycode
 *     Windows                 VK_F10 (0x79)
 *     Mac                     kVK_F10 (0x6D)
 *     Linux                   GDK_KEY_F10 (0xFFC7)
 *                             Qt::Key_F10 (0x01000039)
 *     Android                 KEYCODE_F10 (140)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF10KeyUp(callback, enabled = true, target) {
    useKeyUp("F10", callback, enabled, target);
};
