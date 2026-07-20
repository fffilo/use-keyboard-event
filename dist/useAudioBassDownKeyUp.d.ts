/**
 * React useKeyUp wrapper for key "AudioBassDown".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassDown"
 * Description                 Decreases the amount of bass.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_BASS_DOWN (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioBassDownKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
