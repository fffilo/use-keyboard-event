import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "PageUp".
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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePageUpKeyDown(callback, enabled = true) {
    useKeyDown("PageUp", callback, enabled);
};
