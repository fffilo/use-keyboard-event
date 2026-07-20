import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Open".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "Open"
 * Description                 Opens an existing document or message.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_OPEN (null)
 *     Linux                   GDK_KEY_Open (0x1008FF6B)
 *                             Qt::Key_Open (0x01000121)
 *
 * Prior to Firefox 37, this key generated the key value "Unidentified".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useOpenKeyUp(callback, enabled = true, target) {
    useKeyUp("Open", callback, enabled, target);
};
