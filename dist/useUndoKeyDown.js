import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Undo".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Undo"
 * Description                 Undo the last action.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_UNDO (null)
 *     Linux                   GDK_KEY_Undo (0xFF65)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useUndoKeyDown(callback, enabled = true, target) {
    useKeyDown("Undo", callback, enabled, target);
};
