/**
 * React useKeyUp wrapper for key "Link".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Link"
 * Description                 Opens content linked to the current program, if available and possible.
 * Virtual Keycode
 *     Windows                 VK_LINK (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLinkKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
