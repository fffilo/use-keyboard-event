/**
 * React useKeyDown wrapper for key "Lock".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Lock"
 * Description                 Locks or unlocks the currently selected content or program.
 * Virtual Keycode
 *     Windows                 VK_LOCK (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLockKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
