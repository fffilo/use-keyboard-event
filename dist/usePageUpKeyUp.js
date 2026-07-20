import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "PageUp".
 *
 * Category                    Navigation keys
 * KeyboardEvent.key value     "PageUp"
 * Description                 The Page Up (or PgUp) key. Scrolls up or displays the previous page of content.
 * Virtual Keycode
 *     Windows                 VK_PRIOR (0x21)
 *     Mac                     kVK_PageUp (0x74)
 *     Linux                   GDK_KEY_Page_Up (0xFF55)
 *                             GDK_KEY_KP_Page_Up (0xFF9A)
 *                             Qt::Key_PageUp (0x01000016)
 *     Android                 KEYCODE_PAGE_UP (92)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePageUpKeyUp(callback, enabled = true, target) {
    useKeyUp("PageUp", callback, enabled, target);
};
