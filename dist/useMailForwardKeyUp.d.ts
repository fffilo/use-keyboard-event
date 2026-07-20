/**
 * React useKeyUp wrapper for key "MailForward".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "MailForward"
 * Description                 Opens the user interface to forward a message.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_FORWARD_MAIL (null)
 *     Linux                   GDK_KEY_MailForward (0x1008FF90)
 *                             Qt::Key_MailForward (0x010000FB)
 *
 * Prior to Firefox 37, this key generated the key value "Unidentified".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMailForwardKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
