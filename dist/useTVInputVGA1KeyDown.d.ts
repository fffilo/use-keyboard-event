/**
 * React useKeyDown wrapper for key "TVInputVGA1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputVGA1"
 * Description                 Switches to the input "VGA 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_VGA_1 (251)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVInputVGA1KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
