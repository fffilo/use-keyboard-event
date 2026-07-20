/**
 * React useKeyUp wrapper for key "FavoriteClear2".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteClear2"
 * Description                 Clears the program or content stored in the third favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_CLEAR_FAVORITE_2 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFavoriteClear2KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
