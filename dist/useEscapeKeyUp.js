import useKeyUp from "./useKeyUp";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useEscapeKeyUp(callback, enabled = true) {
    useKeyUp("Escape", callback, enabled);
};
