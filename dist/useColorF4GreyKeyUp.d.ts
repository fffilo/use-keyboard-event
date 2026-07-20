/**
 * React useKeyUp wrapper for key "ColorF4Grey".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ColorF4Grey"
 * Description                 General-purpose media function key, color-coded grey. This has index 4 among the colored keys.
 * Virtual Keycode
 *     Windows                 VK_COLORED_KEY_4 (null)
 *     Android                 KEYCODE_PROG_GREY (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useColorF4GreyKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
