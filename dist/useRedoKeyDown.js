import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Redo".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Redo"
 * Description                 Redo the last action.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_REDO (null)
 *     Linux                   GDK_KEY_Redo (0xFF66)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useRedoKeyDown(callback, enabled = true, target) {
    useKeyDown("Redo", callback, enabled, target);
};
