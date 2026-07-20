/**
 * React useKeyUp wrapper for key "BrowserHome".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserHome"
 * Description                 Navigates to the user's preferred home page.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_HOME (0xAC)
 *                             APPCOMMAND_BROWSER_HOME (null)
 *     Linux                   GDK_KEY_HomePage (0x1008FF18)
 *                             Qt::Key_HomePage (0x01000090)
 *     Android                 KEYCODE_HOME (3)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useBrowserHomeKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
