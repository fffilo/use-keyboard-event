/**
 * React useKeyUp wrapper for key "FavoriteRecall3".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "FavoriteRecall3"
 * Description                 Selects (recalls) the program or content stored in the fourth favorites list slot.
 * Virtual Keycode
 *     Windows                 VK_RECALL_FAVORITE_3 (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useFavoriteRecall3KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
