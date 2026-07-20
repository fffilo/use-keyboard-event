/**
 * React useKeyUp wrapper for key "TVNetwork".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVNetwork"
 * Description                 Toggle the TV's network connection on and off.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_NETWORK (241)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVNetworkKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
