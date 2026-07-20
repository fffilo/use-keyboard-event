import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchWebCam".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchWebCam"
 * Description                 The WebCam key. Opens the webcam application.
 * Virtual Keycode
 *     Linux                   GDK_KEY_WebCam (0x1008FF8F)
 *                             Qt::Key_WebCam (0x010000FA)
 *
 * Firefox introduced support for this key in Firefox 37. Prior to that, this key was reported as "Unidentified".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchWebCamKeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchWebCam", callback, enabled, target);
};
