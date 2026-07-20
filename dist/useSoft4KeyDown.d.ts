/**
 * React useKeyDown wrapper for key "Soft4".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft4"
 * Description                 The fourth general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context4 (0x01100003)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSoft4KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
