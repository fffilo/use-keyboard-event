/**
 * React useKeyUp wrapper for key "ColorF5Brown".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ColorF5Brown"
 * Description                 General-purpose media function key, color-coded brown. This has index 5 among the colored keys.
 * Virtual Keycode
 *     Windows                 VK_COLORED_KEY_5 (null)
 *     Android                 KEYCODE_PROG_BROWN (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useColorF5BrownKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
