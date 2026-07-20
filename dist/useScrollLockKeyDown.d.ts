/**
 * React useKeyDown wrapper for key "ScrollLock".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "ScrollLock"
 * Description                 The Scroll Lock key. Toggles between scrolling and cursor movement modes.
 * Virtual Keycode
 *     Windows                 VK_SCROLL (0x91)
 *     Linux                   GDK_KEY_Scroll_Lock (0xFF14)
 *                             Qt::Key_ScrollLock (0x01000026)
 *     Android                 KEYCODE_SCROLL_LOCK (116)
 *
 * Firefox did not add support for the Symbol key until Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useScrollLockKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
