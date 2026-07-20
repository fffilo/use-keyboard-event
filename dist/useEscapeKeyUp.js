import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Escape".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Escape"
 * Description                 The Esc (Escape) key. Typically used as an exit, cancel, or "escape this operation" button. Historically, the Escape character was used to signal the start of a special control sequence of characters called an "escape sequence."
 * Virtual Keycode
 *     Windows                 VK_ESCAPE (0x1B)
 *     Mac                     kVK_Escape (0x35)
 *     Linux                   GDK_KEY_Escape (0xFF1B)
 *                             Qt::Key_Escape (0x01000000)
 *     Android                 KEYCODE_ESCAPE (111)
 *
 * In Firefox 36 and earlier, the Esc key returns "Esc" instead of "Escape".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useEscapeKeyUp(callback, enabled = true, target) {
    useKeyUp("Escape", callback, enabled, target);
};
