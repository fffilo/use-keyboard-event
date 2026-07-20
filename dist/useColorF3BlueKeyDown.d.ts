/**
 * React useKeyDown wrapper for key "ColorF3Blue".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ColorF3Blue"
 * Description                 General-purpose media function key, color-coded blue. This has index 3 among the colored keys.
 * Virtual Keycode
 *     Windows                 VK_COLORED_KEY_3 (null)
 *     Android                 KEYCODE_PROG_BLUE (186)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useColorF3BlueKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
