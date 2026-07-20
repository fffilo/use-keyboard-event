/**
 * React useKeyUp wrapper for key "FavoriteClear0".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteClear0"
 * Description                 Clears the program or content stored in the first favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_CLEAR_FAVORITE_0 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFavoriteClear0KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
