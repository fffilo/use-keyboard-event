/**
 * React useKeyUp wrapper for key "Process".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "Process"
 * Description                 The Process key. Instructs the IME to process the conversion.
 * Virtual Keycode
 *     Windows                 VK_PROCESSKEY (0xE5)
 *
 * The Process key currently returns "Unidentified" in Firefox. Google Chrome returns the value of the key as if IME were not in use.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useProcessKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
