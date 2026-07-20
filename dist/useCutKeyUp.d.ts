/**
 * React useKeyUp wrapper for key "Cut".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Cut"
 * Description                 The Cut key (on certain extended keyboards).
 * Virtual Keycode
 *     Windows                 APPCOMMAND_CUT (null)
 *     Linux                   GDK_KEY_Cut (0x1008FF58)
 *                             Qt::Key_Cut (0x010000D0)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useCutKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
