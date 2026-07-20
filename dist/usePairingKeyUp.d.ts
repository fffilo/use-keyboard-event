/**
 * React useKeyUp wrapper for key "Pairing".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Pairing"
 * Description                 Starts the process of pairing the remote with a device to be controlled.
 * Virtual Keycode
 *     Android                 KEYCODE_PAIRING (225)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePairingKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
