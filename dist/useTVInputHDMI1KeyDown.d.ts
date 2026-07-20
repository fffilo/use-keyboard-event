/**
 * React useKeyDown wrapper for key "TVInputHDMI1".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVInputHDMI1"
 * Description                 Switches to the input "HDMI 1."
 * Virtual Keycode
 *     Android                 KEYCODE_TV_INPUT_HDMI_1 (243)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVInputHDMI1KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
