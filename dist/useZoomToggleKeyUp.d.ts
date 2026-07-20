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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useZoomToggleKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
