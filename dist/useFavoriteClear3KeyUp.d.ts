/**
 * React useKeyUp wrapper for key "FavoriteClear3".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteClear3"
 * Description                 Clears the program or content stored in the fourth favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_CLEAR_FAVORITE_3 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFavoriteClear3KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
