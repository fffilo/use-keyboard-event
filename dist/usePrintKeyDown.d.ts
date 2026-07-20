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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePrintKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
