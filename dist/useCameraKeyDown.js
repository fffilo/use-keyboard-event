import useKeyDown from "./useKeyDown";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useCameraKeyDown(callback, enabled = true) {
    useKeyDown("Camera", callback, enabled);
};
