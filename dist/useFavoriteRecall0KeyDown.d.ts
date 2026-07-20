/**
 * React useKeyDown wrapper for key "FavoriteRecall0".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteRecall0"
 * Description                 Selects (recalls) the program or content stored in the first favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_RECALL_FAVORITE_0 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFavoriteRecall0KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
