/**
 * React useKeyUp wrapper for key "Undo".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Undo"
 * Description                 Undo the last action.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_UNDO (null)
 *     Linux                   GDK_KEY_Undo (0xFF65)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useUndoKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
