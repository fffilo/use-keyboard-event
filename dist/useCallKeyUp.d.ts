/**
 * React useKeyUp wrapper for key "Call".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "Call"
 * Description                 The Call key. Dials the number which has been entered.
 * Virtual Keycode
 *     Linux                   Qt::Key_Call (0x01100004)
 *     Android                 KEYCODE_CALL (5)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useCallKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
