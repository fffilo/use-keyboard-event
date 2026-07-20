/**
 * React useKeyUp wrapper for key "AudioFaderFront".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioFaderFront"
 * Description                 Adjusts the audio fader toward the front.
 * Virtual Keycode
 *     Windows                 VK_FADER_FRONT (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioFaderFrontKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
