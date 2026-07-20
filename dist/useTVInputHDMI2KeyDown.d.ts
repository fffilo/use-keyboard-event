/**
 * React useKeyDown wrapper for key "TVInputHDMI2".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputHDMI2"
 * Description                 Switches to the input "HDMI 2."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_HDMI_2 (244)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVInputHDMI2KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
