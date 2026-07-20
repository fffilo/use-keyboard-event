/**
 * React useKeyDown wrapper for key "PageDown".
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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePageDownKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
