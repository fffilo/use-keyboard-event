/**
 * React useKeyDown wrapper for key "ZoomOut".
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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useZoomOutKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
