import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Close".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "Close"
 * Description                 Closes the current document or message. Must not exit the application.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_CLOSE (null)
 *     Linux                   GDK_KEY_Close (0x1008FF56)
 *                             Qt::Key_Close (0x010000CE)
 *     Android                 KEYCODE_MEDIA_CLOSE (128)
 *
 * Prior to Firefox 37, this key generated the key value "Unidentified".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useCloseKeyDown(callback, enabled = true, target) {
    useKeyDown("Close", callback, enabled, target);
};
