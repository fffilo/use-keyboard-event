import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Camera".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "Camera"
 * Description                 The Camera key. Activates the camera.
 * Virtual Keycode
 *     Linux                   Qt::Key_Camera (0x01100020)
 *     Android                 KEYCODE_CAMERA (27)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useCameraKeyDown(callback, enabled = true, target) {
    useKeyDown("Camera", callback, enabled, target);
};
