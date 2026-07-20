import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Cut".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Cut"
 * Description                 The Cut key (on certain extended keyboards).
 * Virtual Keycode
 *     Windows                 APPCOMMAND_CUT (null)
 *     Linux                   GDK_KEY_Cut (0x1008FF58)
 *                             Qt::Key_Cut (0x010000D0)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useCutKeyUp(callback, enabled = true, target) {
    useKeyUp("Cut", callback, enabled, target);
};
