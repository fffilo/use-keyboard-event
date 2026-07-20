/**
 * React useKeyDown wrapper for key "BrowserForward".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserForward"
 * Description                 Navigates to the next content or page in the current Web view's history.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_FORWARD (0xA7)
 *                             APPCOMMAND_BROWSER_FORWARD (null)
 *     Linux                   GDK_KEY_Forward (0x1008FF27)
 *                             Qt::Key_Forward (0x01000062)
 *     Android                 KEYCODE_FORWARD (125)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useBrowserForwardKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
