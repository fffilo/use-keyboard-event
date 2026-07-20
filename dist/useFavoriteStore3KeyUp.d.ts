/**
 * React useKeyUp wrapper for key "FavoriteStore3".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteStore3"
 * Description                 Stores the current program or content into the fourth favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_STORE_FAVORITE_3 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFavoriteStore3KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
