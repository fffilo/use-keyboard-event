import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "FavoriteClear0".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteClear0"
 * Description                 Clears the program or content stored in the first favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_CLEAR_FAVORITE_0 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFavoriteClear0KeyUp(callback, enabled = true, target) {
    useKeyUp("FavoriteClear0", callback, enabled, target);
};
