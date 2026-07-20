/**
 * React useKeyUp wrapper for key "MediaStepForward".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaStepForward"
 * Description                 Steps forward to the next content or program.
 * Virtual Keycode
 *     Android                 KEYCODE_MEDIA_SKIP_FORWARD (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaStepForwardKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
