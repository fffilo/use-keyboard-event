/**
 * React useKeyUp wrapper for key "Teletext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Teletext"
 * Description                 Toggles display of teletext [https://en.wikipedia.org/wiki/Teletext], if available.
 * Virtual Keycode
 *     Windows                 VK_TELETEXT (null)
 *     Android                 KEYCODE_TV_TELETEXT (233)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTeletextKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
