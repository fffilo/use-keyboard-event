/**
 * React useKeyDown wrapper for key "FavoriteClear1".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteClear1"
 * Description                 Clears the program or content stored in the second favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_CLEAR_FAVORITE_1 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFavoriteClear1KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
