import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "MailReply".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "MailReply"
 * Description                 Opens the user interface to reply to a message.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_REPLY_TO_MAIL (null)
 *     Linux                   GDK_KEY_Reply (0x1008FF72)
 *                             Qt::Key_Reply (0x010000E5)
 *
 * Prior to Firefox 37, this key generated the key value "Unidentified".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMailReplyKeyUp(callback, enabled = true, target) {
    useKeyUp("MailReply", callback, enabled, target);
};
