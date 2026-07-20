/**
 * React useKeyUp wrapper for key "MediaSkipBackward".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaSkipBackward"
 * Description                 Skips backward to the previous content or program.
 * Virtual Keycode
 *     Android                 KEYCODE_MEDIA_SKIP_BACKWARD (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaSkipBackwardKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
