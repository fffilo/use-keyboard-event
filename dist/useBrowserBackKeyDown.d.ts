/**
 * React useKeyDown wrapper for key "BrowserBack".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserBack"
 * Description                 Navigates to the previous content or page in the current Web view's history.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_BACK (0xA6)
 *                             APPCOMMAND_BROWSER_BACKWARD (null)
 *     Linux                   GDK_KEY_Back (0x1008FF26)
 *                             Qt::Key_Back (0x01000061)
 *     Android                 KEYCODE_BACK (4)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useBrowserBackKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
