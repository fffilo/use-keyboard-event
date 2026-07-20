/**
 * React useKeyDown wrapper for key "NextUserProfile".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NextUserProfile"
 * Description                 Cycles to the next saved user profile, if this feature is supported and multiple profiles exist.
 * Virtual Keycode
 *     Windows                 VK_USER (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useNextUserProfileKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
