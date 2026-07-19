import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Paste".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Paste"
 * Description                 Paste from the clipboard.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_PASTE (null)
 *     Linux                   GDK_KEY_Paste (0x1008FF6D)
 *                             Qt::Key_Paste (0x010000E2)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePasteKeyDown(callback, enabled = true) {
    useKeyDown("Paste", callback, enabled);
};
