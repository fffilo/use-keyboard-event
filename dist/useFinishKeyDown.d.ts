/**
 * React useKeyDown wrapper for key "Finish".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Finish"
 * Description                 The Finish key.
 * Virtual Keycode
 *     Windows                 VK_OEM_FINISH (0xF1)
 *
 * The Finish key generates the key code "Unidentified" on Firefox, unless the Japanese keyboard layout is in effect, in which case it generates "Katakana" instead.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFinishKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
