/**
 * React useKeyUp wrapper for key "LiveContent".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "LiveContent"
 * Description                 Toggles a display listing currently available live content or programs.
 * Virtual Keycode
 *     Windows                 VK_LIVE (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLiveContentKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
