import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "FavoriteRecall0".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteRecall0"
 * Description                 Selects (recalls) the program or content stored in the first favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_RECALL_FAVORITE_0 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFavoriteRecall0KeyDown(callback, enabled = true) {
    useKeyDown("FavoriteRecall0", callback, enabled);
};
