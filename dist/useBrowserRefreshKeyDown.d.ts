/**
 * React useKeyDown wrapper for key "BrowserRefresh".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserRefresh"
 * Description                 Refreshes the current page or content.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_REFRESH (0xA8)
 *                             APPCOMMAND_BROWSER_REFRESH (null)
 *     Linux                   GDK_KEY_Refresh (0x1008FF29)
 *                             GDK_KEY_Reload (0x1008FF73)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useBrowserRefreshKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
