import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "FavoriteClear1".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteClear1"
 * Description                 Clears the program or content stored in the second favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_CLEAR_FAVORITE_1 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFavoriteClear1KeyUp(callback, enabled = true, target) {
    useKeyUp("FavoriteClear1", callback, enabled, target);
};
