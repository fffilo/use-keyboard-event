/**
 * React useKeyUp wrapper for key "AudioFaderRear".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioFaderRear"
 * Description                 Adjusts the audio fader toward the rear.
 * Virtual Keycode
 *     Windows                 VK_FADER_REAR (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioFaderRearKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
