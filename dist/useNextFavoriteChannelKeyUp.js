import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "NextFavoriteChannel".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NextFavoriteChannel"
 * Description                 Cycles to the next channel in the favorites list.
 * Virtual Keycode
 *     Windows                 VK_NEXT_FAVORITE_CHANNEL (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useNextFavoriteChannelKeyUp(callback, enabled = true, target) {
    useKeyUp("NextFavoriteChannel", callback, enabled, target);
};
