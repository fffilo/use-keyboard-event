/**
 * React useKeyUp wrapper for key "PinPToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PinPToggle"
 * Description                 Toggles display of the picture-in-picture view on and off.
 * Virtual Keycode
 *     Windows                 VK_PINP_TOGGLE (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePinPToggleKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
