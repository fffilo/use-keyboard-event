import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "FavoriteClear1".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteClear1"
 * Description                 Clears the program or content stored in the second favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_CLEAR_FAVORITE_1 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFavoriteClear1KeyDown(callback, enabled = true) {
    useKeyDown("FavoriteClear1", callback, enabled);
};
