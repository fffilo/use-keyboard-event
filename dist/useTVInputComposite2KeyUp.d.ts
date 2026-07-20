/**
 * React useKeyUp wrapper for key "TVInputComposite2".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputComposite2"
 * Description                 Switches to the input "Composite 2."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_COMPOSITE_2 (248)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVInputComposite2KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
