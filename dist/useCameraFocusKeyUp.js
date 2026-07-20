import useKeyUp from "./useKeyUp.js";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useCameraFocusKeyUp(callback, enabled = true) {
    useKeyUp("CameraFocus", callback, enabled);
};
