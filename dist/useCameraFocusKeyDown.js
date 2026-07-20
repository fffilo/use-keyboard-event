import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "CameraFocus".
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
export default function useCameraFocusKeyDown(callback, enabled = true) {
    useKeyDown("CameraFocus", callback, enabled);
};
