/**
 * React useKeyDown wrapper for key "Clear".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "Clear"
 * Description                 The numeric keypad's Clear key.
 * Virtual Keycode
 *     Mac                     kVK_ANSI_KeypadClear (0x47)
 *     Linux                   GDK_KEY_Clear (0xFF0B)
 *                             Qt::Key_Clear (0x0100000B)
 *     Android                 KEYCODE_CLEAR (28)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useClearKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
