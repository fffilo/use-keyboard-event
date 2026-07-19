import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Save".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "Save"
 * Description                 Saves the current document or message.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_SAVE (null)
 *     Linux                   GDK_KEY_Save (0x1008FF77)
 *                             Qt::Key_Save (0x010000EA)
 *
 * Prior to Firefox 37, this key generated the key value "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSaveKeyUp(callback, enabled = true) {
    useKeyUp("Save", callback, enabled);
};
