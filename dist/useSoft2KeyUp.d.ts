/**
 * React useKeyUp wrapper for key "Soft2".
 *
 * Category                    Function keys
 * KeyboardEvent.key value     "Soft2"
 * Description                 The second general-purpose virtual function key.
 * Virtual Keycode
 *     Linux                   Qt::Key_Context2 (0x01100001)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSoft2KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
