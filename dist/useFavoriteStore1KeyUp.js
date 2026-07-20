import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "FavoriteStore1".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteStore1"
 * Description                 Stores the current program or content into the second favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_STORE_FAVORITE_1 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFavoriteStore1KeyUp(callback, enabled = true) {
    useKeyUp("FavoriteStore1", callback, enabled);
};
