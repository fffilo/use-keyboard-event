import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "FavoriteStore3".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteStore3"
 * Description                 Stores the current program or content into the fourth favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_STORE_FAVORITE_3 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFavoriteStore3KeyDown(callback, enabled = true) {
    useKeyDown("FavoriteStore3", callback, enabled);
};
