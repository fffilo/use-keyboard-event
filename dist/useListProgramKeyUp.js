import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "ListProgram".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ListProgram"
 * Description                 Lists the current program.
 * Virtual Keycode
 *     Windows                 VK_LIST (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useListProgramKeyUp(callback, enabled = true) {
    useKeyUp("ListProgram", callback, enabled);
};
