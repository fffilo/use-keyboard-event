/**
 * React useKeyDown wrapper for key "MediaSkipForward".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaSkipForward"
 * Description                 Skips forward to the next content or program.
 * Virtual Keycode
 *     Windows                 VK_SKIP (null)
 *     Android                 KEYCODE_MEDIA_SKIP_FORWARD (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaSkipForwardKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
