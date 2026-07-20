/**
 * React useKeyDown wrapper for key "PinPUp".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PinPUp"
 * Description                 A button to move the picture-in-picture view upward.
 * Virtual Keycode
 *     Windows                 VK_PINP_UP (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePinPUpKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
