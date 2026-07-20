/**
 * React useKeyDown wrapper for key "FavoriteRecall1".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteRecall1"
 * Description                 Selects (recalls) the program or content stored in the second favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_RECALL_FAVORITE_1 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFavoriteRecall1KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
