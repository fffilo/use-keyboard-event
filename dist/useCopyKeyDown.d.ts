/**
 * React useKeyDown wrapper for key "Copy".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Copy"
 * Description                 The Copy key (on certain extended keyboards).
 * Virtual Keycode
 *     Windows                 APPCOMMAND_COPY (null)
 *     Linux                   GDK_KEY_Copy (0x1008FF57)
 *                             Qt::Key_Copy (0x010000CF)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useCopyKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
