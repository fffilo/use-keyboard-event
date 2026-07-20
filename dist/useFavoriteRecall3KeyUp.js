import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "FavoriteRecall3".
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
export default function useFavoriteRecall3KeyUp(callback, enabled = true, target) {
    useKeyUp("FavoriteRecall3", callback, enabled, target);
};
