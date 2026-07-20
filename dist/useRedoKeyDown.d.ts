/**
 * React useKeyDown wrapper for key "Redo".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Redo"
 * Description                 Redo the last action.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_REDO (null)
 *     Linux                   GDK_KEY_Redo (0xFF66)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useRedoKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
