/**
 * React useKeyUp wrapper for key "PinPMove".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PinPMove"
 * Description                 A button to control moving the picture-in-picture view.
 * Virtual Keycode
 *     Windows                 VK_PINP_MOVE (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePinPMoveKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
