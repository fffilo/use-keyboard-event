/**
 * React useKeyDown wrapper for key "MediaStepBackward".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaStepBackward"
 * Description                 Steps backward to the previous content or program.
 * Virtual Keycode
 *     Android                 KEYCODE_MEDIA_STEP_BACKWARD (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaStepBackwardKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
