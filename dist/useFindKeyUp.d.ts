/**
 * React useKeyUp wrapper for key "Find".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Find"
 * Description                 The Find key. Opens an interface (typically a dialog box) for performing a find/search operation.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_FIND (null)
 *     Linux                   GDK_KEY_Find (0xFF68)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFindKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
