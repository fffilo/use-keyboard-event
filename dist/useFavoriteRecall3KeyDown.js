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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFavoriteRecall3KeyDown(callback, enabled = true, target) {
    useKeyDown("FavoriteRecall3", callback, enabled, target);
};
