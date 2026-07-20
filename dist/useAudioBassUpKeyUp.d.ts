/**
 * React useKeyUp wrapper for key "AudioBassUp".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassUp"
 * Description                 Increases the amount of bass.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_BASS_UP (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioBassUpKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
