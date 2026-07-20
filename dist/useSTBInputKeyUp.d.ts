/**
 * React useKeyUp wrapper for key "STBInput".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "STBInput"
 * Description                 Cycles among input modes on an external set-top box (STB).
 * Virtual Keycode
 *     Android                 KEYCODE_STB_INPUT (180)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSTBInputKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
