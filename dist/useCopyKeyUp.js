import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Copy".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Copy"
 * Description                 The Copy key (on certain extended keyboards).
 * Virtual Keycode
 *     Windows                 APPCOMMAND_COPY (null)
 *     Linux                   GDK_KEY_Copy (0x1008FF57)
 *                             Qt::Key_Copy (0x010000CF)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useCopyKeyUp(callback, enabled = true, target) {
    useKeyUp("Copy", callback, enabled, target);
};
