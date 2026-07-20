import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ZoomOut".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "ZoomOut"
 * Description                 The ZoomOut key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_ZoomOut (0x1008FF8C)
 *                             Qt::Key_ZoomOut (0x010000F7)
 *     Android                 KEYCODE_ZOOM_OUT (169)
 *
 * Firefox didn't support the "ZoomIn" and "ZoomOut" keys until Firefox 37.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useZoomOutKeyUp(callback, enabled = true, target) {
    useKeyUp("ZoomOut", callback, enabled, target);
};
