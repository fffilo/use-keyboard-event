import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Redo".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Redo"
 * Description                 Redo the last action.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_REDO (null)
 *     Linux                   GDK_KEY_Redo (0xFF66)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useRedoKeyUp(callback, enabled = true) {
    useKeyUp("Redo", callback, enabled);
};
