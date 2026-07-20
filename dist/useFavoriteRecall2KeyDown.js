import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "FavoriteRecall2".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteRecall2"
 * Description                 Selects (recalls) the program or content stored in the third favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_RECALL_FAVORITE_2 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFavoriteRecall2KeyDown(callback, enabled = true) {
    useKeyDown("FavoriteRecall2", callback, enabled);
};
