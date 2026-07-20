import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "ListProgram".
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
export default function useListProgramKeyDown(callback, enabled = true, target) {
    useKeyDown("ListProgram", callback, enabled, target);
};
