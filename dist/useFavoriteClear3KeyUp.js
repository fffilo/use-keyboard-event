import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "FavoriteClear3".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteClear3"
 * Description                 Clears the program or content stored in the fourth favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_CLEAR_FAVORITE_3 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFavoriteClear3KeyUp(callback, enabled = true) {
    useKeyUp("FavoriteClear3", callback, enabled);
};
