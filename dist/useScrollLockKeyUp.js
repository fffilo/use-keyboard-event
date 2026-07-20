import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "ScrollLock".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useScrollLockKeyUp(callback, enabled = true, target) {
    useKeyUp("ScrollLock", callback, enabled, target);
};
