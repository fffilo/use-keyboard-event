import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Find".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Find"
 * Description                 The Find key. Opens an interface (typically a dialog box) for performing a find/search operation.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_FIND (null)
 *     Linux                   GDK_KEY_Find (0xFF68)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFindKeyDown(callback, enabled = true, target) {
    useKeyDown("Find", callback, enabled, target);
};
