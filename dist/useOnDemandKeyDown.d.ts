/**
 * React useKeyDown wrapper for key "OnDemand".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "OnDemand"
 * Description                 Opens the user interface for selecting on demand content or programs to watch.
 * Virtual Keycode
 *     Windows                 VK_ON_DEMAND (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useOnDemandKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
