import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "NextFavoriteChannel".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NextFavoriteChannel"
 * Description                 Cycles to the next channel in the favorites list.
 * Virtual Keycode
 *     Windows                 VK_NEXT_FAVORITE_CHANNEL (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useNextFavoriteChannelKeyDown(callback, enabled = true) {
    useKeyDown("NextFavoriteChannel", callback, enabled);
};
