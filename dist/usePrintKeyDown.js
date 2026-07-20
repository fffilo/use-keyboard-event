import useKeyDown from "./useKeyDown.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePrintKeyDown(callback, enabled = true, target) {
    useKeyDown("Print", callback, enabled, target);
};
