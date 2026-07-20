/**
 * React useKeyUp wrapper for key "Execute".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Execute"
 * Description                 The Execute key.
 * Virtual Keycode
 *     Windows                 VK_EXECUTE (0x2B)
 *     Linux                   Qt::Key_Execute (0x01020003)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useExecuteKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
