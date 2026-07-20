/**
 * React useKeyDown wrapper for key "TVInput".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInput"
 * Description                 Cycles the input mode on an external TV.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT (178)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVInputKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
