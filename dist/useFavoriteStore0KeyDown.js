import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "FavoriteStore0".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteStore0"
 * Description                 Stores the current program or content into the first favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_STORE_FAVORITE_0 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFavoriteStore0KeyDown(callback, enabled = true) {
    useKeyDown("FavoriteStore0", callback, enabled);
};
