/**
 * React useKeyUp wrapper for key "MicrophoneToggle".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "MicrophoneToggle"
 * Description                 Toggles the microphone on and off.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MIC_ON_OFF_TOGGLE (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMicrophoneToggleKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
