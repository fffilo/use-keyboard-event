/**
 * React useKeyUp wrapper for key "AudioTrebleDown".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioTrebleDown"
 * Description                 Decreases the amount of treble.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_TREBLE_DOWN (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioTrebleDownKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
