import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Close".
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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useCloseKeyUp(callback, enabled = true) {
    useKeyUp("Close", callback, enabled);
};
