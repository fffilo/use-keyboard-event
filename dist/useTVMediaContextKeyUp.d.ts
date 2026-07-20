/**
 * React useKeyUp wrapper for key "TVMediaContext".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVMediaContext"
 * Description                 The Media Context menu key.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_MEDIA_CONTEXT_MENU (257)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVMediaContextKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
