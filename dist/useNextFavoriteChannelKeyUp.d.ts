/**
 * React useKeyUp wrapper for key "NextFavoriteChannel".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NextFavoriteChannel"
 * Description                 Cycles to the next channel in the favorites list.
 * Virtual Keycode
 *     Windows                 VK_NEXT_FAVORITE_CHANNEL (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useNextFavoriteChannelKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
