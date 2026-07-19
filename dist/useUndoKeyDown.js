import useKeyDown from "./useKeyDown";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useUndoKeyDown(callback, enabled = true) {
    useKeyDown("Undo", callback, enabled);
};
