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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMailReplyKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
