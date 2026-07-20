/**
 * React useKeyDown wrapper for key "BrowserStop".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserStop"
 * Description                 Stops loading the currently displayed Web view or content.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_STOP (0xA9)
 *                             APPCOMMAND_BROWSER_STOP (null)
 *     Linux                   GDK_KEY_Stop (0x1008FF28)
 *                             Qt::Key_Search (0x01000063)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useBrowserStopKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
