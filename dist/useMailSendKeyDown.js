import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "MailSend".
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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMailSendKeyDown(callback, enabled = true) {
    useKeyDown("MailSend", callback, enabled);
};
