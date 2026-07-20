/**
 * React useKeyUp wrapper for key "Paste".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Paste"
 * Description                 Paste from the clipboard.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_PASTE (null)
 *     Linux                   GDK_KEY_Paste (0x1008FF6D)
 *                             Qt::Key_Paste (0x010000E2)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePasteKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
