/**
 * React useKeyUp wrapper for key "Again".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Again"
 * Description                 The Again key. Redoes or repeats a previous action.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Redo (0xFF66)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAgainKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
