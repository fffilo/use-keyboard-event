import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "FavoriteStore0".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteStore0"
 * Description                 Stores the current program or content into the first favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_STORE_FAVORITE_0 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFavoriteStore0KeyUp(callback, enabled = true, target) {
    useKeyUp("FavoriteStore0", callback, enabled, target);
};
