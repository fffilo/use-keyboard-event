import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "FavoriteRecall2".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteRecall2"
 * Description                 Selects (recalls) the program or content stored in the third favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_RECALL_FAVORITE_2 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFavoriteRecall2KeyUp(callback, enabled = true, target) {
    useKeyUp("FavoriteRecall2", callback, enabled, target);
};
