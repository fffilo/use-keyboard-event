import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Undo".
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
export default function useUndoKeyUp(callback, enabled = true, target) {
    useKeyUp("Undo", callback, enabled, target);
};
