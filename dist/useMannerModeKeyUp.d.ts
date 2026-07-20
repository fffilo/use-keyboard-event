/**
 * React useKeyUp wrapper for key "MannerMode".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "MannerMode"
 * Description                 A button which cycles among the notification modes: silent, vibrate, ring, and so forth.
 * Virtual Keycode
 *     Android                 KEYCODE_MANNER_MODE (205)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMannerModeKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
