import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Print".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "Print"
 * Description                 Prints the current document or message.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_PRINT (null)
 *     Linux                   GDK_KEY_Print (0xFF61)
 *                             Qt::Print (0x01000009)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePrintKeyDown(callback, enabled = true) {
    useKeyDown("Print", callback, enabled);
};
