import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ZoomIn".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "ZoomIn"
 * Description                 The ZoomIn key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_ZoomIn (0x1008FF8B)
 *                             Qt::Key_ZoomIn (0x010000F6)
 *     Android                 KEYCODE_ZOOM_IN (168)
 *
 * Firefox didn't support the "ZoomIn" and "ZoomOut" keys until Firefox 37.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useZoomInKeyUp(callback, enabled = true) {
    useKeyUp("ZoomIn", callback, enabled);
};
