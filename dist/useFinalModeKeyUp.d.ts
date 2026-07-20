/**
 * React useKeyUp wrapper for key "FinalMode".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "FinalMode"
 * Description                 The Final (Final Mode) key is used on some Asian keyboards to enter final mode when using IMEs.
 * Virtual Keycode
 *     Windows                 VK_FINAL (0x18)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFinalModeKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
