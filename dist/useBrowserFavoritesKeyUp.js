import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "BrowserFavorites".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useBrowserFavoritesKeyUp(callback, enabled = true, target) {
    useKeyUp("BrowserFavorites", callback, enabled, target);
};
