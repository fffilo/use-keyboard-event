/**
 * React useKeyUp wrapper for key "ColorF0Red".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ColorF0Red"
 * Description                 General-purpose media function key, color-coded red. This has index 0 among the colored keys.
 * Virtual Keycode
 *     Windows                 VK_COLORED_KEY_0 (null)
 *     Android                 KEYCODE_PROG_RED (183)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useColorF0RedKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
