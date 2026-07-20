import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "F19".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "F19"
 * Description                 The F19 key.
 * Virtual Keycode
 *     Windows                 VK_F19 (0x82)
 *     Mac                     kVK_F19 (0x50)
 *     Linux                   GDK_KEY_F19 (0xFFD0)
 *                             Qt::Key_F19 (0x01000042)
 *     Android                 KEYCODE_F19 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useF19KeyDown(callback, enabled = true, target) {
    useKeyDown("F19", callback, enabled, target);
};
