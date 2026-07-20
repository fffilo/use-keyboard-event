import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "FavoriteStore3".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteStore3"
 * Description                 Stores the current program or content into the fourth favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_STORE_FAVORITE_3 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFavoriteStore3KeyUp(callback, enabled = true, target) {
    useKeyUp("FavoriteStore3", callback, enabled, target);
};
