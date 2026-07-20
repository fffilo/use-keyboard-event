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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMailForwardKeyDown(callback, enabled = true) {
    useKeyDown("MailForward", callback, enabled);
};
