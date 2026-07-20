/**
 * React useKeyDown wrapper for key "BrowserFavorites".
 *
 * Category                    Browser control keys
 * KeyboardEvent.key value     "BrowserFavorites"
 * Description                 Opens the user's list of bookmarks/favorites.
 * Virtual Keycode
 *     Windows                 VK_BROWSER_FAVORITES (0xAB)
 *                             APPCOMMAND_BROWSER_FAVORITES (null)
 *     Linux                   GDK_KEY_Favorites (0x1008FF30)
 *                             GDK_KEY_MySites (0x1008FF67)
 *                             Qt::Favorites (0x01000091)
 *     Android                 KEYCODE_BOOKMARK (174)
 *
 * Prior to Firefox 37, this key's value was reported as "Unidentified".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useBrowserFavoritesKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
