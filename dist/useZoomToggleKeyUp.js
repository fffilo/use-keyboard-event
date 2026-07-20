import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ZoomToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ZoomToggle"
 * Description                 Toggles between fullscreen and scaled content display, or otherwise change the magnification level.
 * Virtual Keycode
 *     Windows                 VK_ZOOM (0xFB)
 *     Linux                   Qt::Key_Zoom (0x01020006)
 *     Android                 KEYCODE_TV_ZOOM_MODE (255)
 *
 * Firefox 36 and earlier identifies the zoom toggle button as "Zoom". Firefox 37 corrects this to "ZoomToggle".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useZoomToggleKeyUp(callback, enabled = true, target) {
    useKeyUp("ZoomToggle", callback, enabled, target);
};
