/**
 * React useKeyDown wrapper for key "TVInputComposite1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputComposite1"
 * Description                 Switches to the input "Composite 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_COMPOSITE_1 (247)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVInputComposite1KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
