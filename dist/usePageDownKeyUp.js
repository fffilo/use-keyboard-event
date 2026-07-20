import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "PageDown".
 *
 * Category                    Navigation keys
 * KeyboardEvent.key value     "PageDown"
 * Description                 The Page Down (or PgDn) key. Scrolls down or displays the next page of content.
 * Virtual Keycode
 *     Windows                 VK_NEXT (0x22)
 *     Mac                     kVK_PageDown (0x79)
 *     Linux                   GDK_KEY_Page_Down (0xFF56)
 *                             GDK_KEY_KP_Page_Down (0xFF9B)
 *                             Qt::Key_PageDown (0x01000017)
 *     Android                 KEYCODE_PAGE_DOWN (93)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePageDownKeyUp(callback, enabled = true, target) {
    useKeyUp("PageDown", callback, enabled, target);
};
