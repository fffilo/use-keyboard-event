/**
 * React useKeyDown wrapper for key "ZoomIn".
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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useZoomInKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
