import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "FavoriteClear3".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteClear3"
 * Description                 Clears the program or content stored in the fourth favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_CLEAR_FAVORITE_3 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFavoriteClear3KeyUp(callback, enabled = true, target) {
    useKeyUp("FavoriteClear3", callback, enabled, target);
};
