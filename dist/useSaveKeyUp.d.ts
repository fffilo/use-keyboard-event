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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSaveKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
