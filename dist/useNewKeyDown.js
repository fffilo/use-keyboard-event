import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "New".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "New"
 * Description                 Creates a new document or message.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_NEW (null)
 *     Linux                   GDK_KEY_New (0x1008FF68)
 *                             Qt::Key_New (0x01000120)
 *
 * Prior to Firefox 37, this key generated the key value "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useNewKeyDown(callback, enabled = true) {
    useKeyDown("New", callback, enabled);
};
