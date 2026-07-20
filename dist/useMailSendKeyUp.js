import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "MailSend".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "MailSend"
 * Description                 Sends the current message.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_SEND_MAIL (null)
 *     Linux                   GDK_KEY_Send (0x1008FF7B)
 *                             Qt::Key_Send (0x010000EB)
 *
 * Prior to Firefox 37, this key generated the key value "Unidentified".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMailSendKeyUp(callback, enabled = true, target) {
    useKeyUp("MailSend", callback, enabled, target);
};
