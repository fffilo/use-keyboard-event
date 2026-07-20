/**
 * React useKeyUp wrapper for key "LastNumberRedial".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "LastNumberRedial"
 * Description                 The Redial button. Redials the last-called number.
 * Virtual Keycode
 *     Linux                   Qt::Key_LastNumberRedial (0x01100009)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLastNumberRedialKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
