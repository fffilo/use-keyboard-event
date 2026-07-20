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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useZoomInKeyUp(callback, enabled = true, target) {
    useKeyUp("ZoomIn", callback, enabled, target);
};
