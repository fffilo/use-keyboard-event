/**
 * React useKeyUp wrapper for key "DisplaySwap".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "DisplaySwap"
 * Description                 Cycles among video sources.
 * Virtual Keycode
 *     Windows                 VK_DISPLAY_SWAP (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useDisplaySwapKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
