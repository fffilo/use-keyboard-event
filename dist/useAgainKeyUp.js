import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Again".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Again"
 * Description                 The Again key. Redoes or repeats a previous action.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Redo (0xFF66)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAgainKeyUp(callback, enabled = true) {
    useKeyUp("Again", callback, enabled);
};
