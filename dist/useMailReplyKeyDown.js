import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MailReply".
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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMailReplyKeyDown(callback, enabled = true) {
    useKeyDown("MailReply", callback, enabled);
};
