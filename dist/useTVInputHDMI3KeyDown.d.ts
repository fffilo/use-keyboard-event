/**
 * React useKeyDown wrapper for key "TVInputHDMI3".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputHDMI3"
 * Description                 Switches to the input "HDMI 3."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_HDMI_3 (245)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVInputHDMI3KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
