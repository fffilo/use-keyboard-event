import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "FavoriteRecall3".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteRecall3"
 * Description                 Selects (recalls) the program or content stored in the fourth favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_RECALL_FAVORITE_3 (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useFavoriteRecall3KeyDown(callback, enabled = true) {
    useKeyDown("FavoriteRecall3", callback, enabled);
};
