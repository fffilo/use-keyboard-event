import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "FavoriteStore2".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteStore2"
 * Description                 Stores the current program or content into the third favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_STORE_FAVORITE_2 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFavoriteStore2KeyUp(callback, enabled = true, target) {
    useKeyUp("FavoriteStore2", callback, enabled, target);
};
