import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "FavoriteRecall1".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteRecall1"
 * Description                 Selects (recalls) the program or content stored in the second favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_RECALL_FAVORITE_1 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFavoriteRecall1KeyUp(callback, enabled = true) {
    useKeyUp("FavoriteRecall1", callback, enabled);
};
