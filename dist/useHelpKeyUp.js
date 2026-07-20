import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Help".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Help"
 * Description                 The Help key. Opens or toggles the display of help information.
 * Virtual Keycode
 *     Windows                 VK_HELP (0x2F)
 *                             APPCOMMAND_HELP (null)
 *     Mac                     kVK_Help (0x72)
 *     Linux                   GDK_KEY_Help (0xFF6A)
 *                             Qt::Key_Help (0x01000058)
 *     Android                 KEYCODE_HELP (259)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useHelpKeyUp(callback, enabled = true, target) {
    useKeyUp("Help", callback, enabled, target);
};
