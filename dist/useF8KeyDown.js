import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "F8".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F8"
 * Description                 The F8 key.
 * Virtual Keycode
 *     Windows                 VK_F8 (0x77)
 *     Mac                     kVK_F8 (0x64)
 *     Linux                   GDK_KEY_F8 (0xFFC5)
 *                             Qt::Key_F8 (0x01000037)
 *     Android                 KEYCODE_F8 (138)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF8KeyDown(callback, enabled = true, target) {
    useKeyDown("F8", callback, enabled, target);
};
