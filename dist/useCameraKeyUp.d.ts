/**
 * React useKeyUp wrapper for key "Camera".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "Camera"
 * Description                 The Camera key. Activates the camera.
 * Virtual Keycode
 *     Linux                   Qt::Key_Camera (0x01100020)
 *     Android                 KEYCODE_CAMERA (27)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useCameraKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
