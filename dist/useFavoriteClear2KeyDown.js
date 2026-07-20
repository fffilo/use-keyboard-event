import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "FavoriteClear2".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteClear2"
 * Description                 Clears the program or content stored in the third favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_CLEAR_FAVORITE_2 (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useFavoriteClear2KeyDown(callback, enabled = true, target) {
    useKeyDown("FavoriteClear2", callback, enabled, target);
};
