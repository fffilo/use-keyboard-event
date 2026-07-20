/**
 * React useKeyUp wrapper for key "CameraFocus".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "CameraFocus"
 * Description                 The Focus key. Focuses the camera.
 * Virtual Keycode
 *     Linux                   Qt::Key_CameraFocus (0x01100021)
 *     Android                 KEYCODE_FOCUS (80)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useCameraFocusKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
