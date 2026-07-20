/**
 * React useKeyUp wrapper for key "RandomToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "RandomToggle"
 * Description                 Toggles random media (also known as "shuffle mode") on and off.
 * Virtual Keycode
 *     Windows                 VK_RANDOM_TOGGLE (null)
 *     Linux                   GDK_KEY_AudioRandomPlay (0x1008FF99)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useRandomToggleKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
