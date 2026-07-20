/**
 * React useKeyDown wrapper for key "FavoriteRecall2".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteRecall2"
 * Description                 Selects (recalls) the program or content stored in the third favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_RECALL_FAVORITE_2 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFavoriteRecall2KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
