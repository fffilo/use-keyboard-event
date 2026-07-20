/**
 * React useKeyDown wrapper for key "ColorF2Yellow".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ColorF2Yellow"
 * Description                 General-purpose media function key, color-coded yellow. This has index 2 among the colored keys.
 * Virtual Keycode
 *     Windows                 VK_COLORED_KEY_2 (null)
 *     Android                 KEYCODE_PROG_YELLOW (185)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useColorF2YellowKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
