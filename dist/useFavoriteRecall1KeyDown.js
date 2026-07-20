import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "FavoriteRecall1".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteRecall1"
 * Description                 Selects (recalls) the program or content stored in the second favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_RECALL_FAVORITE_1 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFavoriteRecall1KeyDown(callback, enabled = true, target) {
    useKeyDown("FavoriteRecall1", callback, enabled, target);
};
