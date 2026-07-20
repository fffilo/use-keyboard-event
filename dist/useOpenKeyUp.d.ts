/**
 * React useKeyUp wrapper for key "Open".
 *
 * Category                    Document keys
 * KeyboardEvent.key value     "Open"
 * Description                 Opens an existing document or message.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_OPEN (null)
 *     Linux                   GDK_KEY_Open (0x1008FF6B)
 *                             Qt::Key_Open (0x01000121)
 *
 * Prior to Firefox 37, this key generated the key value "Unidentified".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useOpenKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
