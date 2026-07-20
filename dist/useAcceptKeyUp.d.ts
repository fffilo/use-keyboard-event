/**
 * React useKeyUp wrapper for key "Accept".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Accept"
 * Description                 The Accept, Commit, or OK key or button. Accepts the currently selected option or input method sequence conversion.
 * Virtual Keycode
 *     Windows                 VK_ACCEPT (0x1E)
 *     Android                 KEYCODE_DPAD_CENTER (23)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAcceptKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
