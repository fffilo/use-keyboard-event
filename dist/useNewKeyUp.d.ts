/**
 * React useKeyUp wrapper for key "New".
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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useNewKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
