import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ListProgram".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ListProgram"
 * Description                 Lists the current program.
 * Virtual Keycode
 *     Windows                 VK_LIST (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useListProgramKeyUp(callback, enabled = true, target) {
    useKeyUp("ListProgram", callback, enabled, target);
};
