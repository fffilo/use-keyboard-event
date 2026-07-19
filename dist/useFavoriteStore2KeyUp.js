import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "FavoriteStore2".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteStore2"
 * Description                 Stores the current program or content into the third favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_STORE_FAVORITE_2 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFavoriteStore2KeyUp(callback, enabled = true) {
    useKeyUp("FavoriteStore2", callback, enabled);
};
