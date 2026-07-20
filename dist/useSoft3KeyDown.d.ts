/**
 * React useKeyDown wrapper for key "Soft3".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft3"
 * Description                 The third general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context3 (0x01100002)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSoft3KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
