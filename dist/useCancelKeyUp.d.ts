/**
 * React useKeyUp wrapper for key "Cancel".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Cancel"
 * Description                 The Cancel key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Cancel (0xFF69)
 *
 * In Google Chrome 52, the Cancel key incorrectly returns the key code "Pause". This is fixed in Chrome 53. (See Chrome bug 612749 [https://crbug.com/612749] for details.)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useCancelKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
