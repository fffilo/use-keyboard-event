/**
 * React useKeyUp wrapper for key "TVInputHDMI4".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputHDMI4"
 * Description                 Switches to the input "HDMI 4."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_HDMI_4 (246)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVInputHDMI4KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
