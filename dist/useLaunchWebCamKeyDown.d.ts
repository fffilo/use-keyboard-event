/**
 * React useKeyDown wrapper for key "LaunchWebCam".
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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchWebCamKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
