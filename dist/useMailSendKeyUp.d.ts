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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMailSendKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
