import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Paste".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Paste"
 * Description                 Paste from the clipboard.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_PASTE (null)
 *     Linux                   GDK_KEY_Paste (0x1008FF6D)
 *                             Qt::Key_Paste (0x010000E2)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePasteKeyDown(callback, enabled = true, target) {
    useKeyDown("Paste", callback, enabled, target);
};
