/**
 * React useKeyDown wrapper for key "Soft1".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft1"
 * Description                 The first general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context1 (0x01100000)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSoft1KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
