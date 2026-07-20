import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "New".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "New"
 * Description                 Creates a new document or message.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_NEW (null)
 *     Linux                   GDK_KEY_New (0x1008FF68)
 *                             Qt::Key_New (0x01000120)
 *
 * Prior to Firefox 37, this key generated the key value "Unidentified".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useNewKeyUp(callback, enabled = true, target) {
    useKeyUp("New", callback, enabled, target);
};
