import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "FavoriteClear0".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteClear0"
 * Description                 Clears the program or content stored in the first favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_CLEAR_FAVORITE_0 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFavoriteClear0KeyUp(callback, enabled = true) {
    useKeyUp("FavoriteClear0", callback, enabled);
};
