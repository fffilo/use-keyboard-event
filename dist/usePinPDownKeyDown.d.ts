/**
 * React useKeyDown wrapper for key "PinPDown".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PinPDown"
 * Description                 A button to move the picture-in-picture view downward.
 * Virtual Keycode
 *     Windows                 VK_PINP_DOWN (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePinPDownKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
