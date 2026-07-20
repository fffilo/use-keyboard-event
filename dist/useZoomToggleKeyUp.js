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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useZoomToggleKeyUp(callback, enabled = true) {
    useKeyUp("ZoomToggle", callback, enabled);
};
