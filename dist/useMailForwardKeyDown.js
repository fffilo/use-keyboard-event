import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MailForward".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMailForwardKeyDown(callback, enabled = true, target) {
    useKeyDown("MailForward", callback, enabled, target);
};
