/**
 * React useKeyDown wrapper for key "TVInputComponent1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputComponent1"
 * Description                 Switches to the input "Component 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_COMPONENT_1 (249)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVInputComponent1KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
