/**
 * React useKeyDown wrapper for key "FavoriteStore2".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteStore2"
 * Description                 Stores the current program or content into the third favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_STORE_FAVORITE_2 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFavoriteStore2KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
