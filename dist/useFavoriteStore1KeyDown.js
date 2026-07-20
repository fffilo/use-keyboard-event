import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "FavoriteStore1".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteStore1"
 * Description                 Stores the current program or content into the second favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_STORE_FAVORITE_1 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFavoriteStore1KeyDown(callback, enabled = true, target) {
    useKeyDown("FavoriteStore1", callback, enabled, target);
};
