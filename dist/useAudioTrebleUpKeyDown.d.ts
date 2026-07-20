/**
 * React useKeyDown wrapper for key "AudioTrebleUp".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioTrebleUp"
 * Description                 Increases the amount of treble.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_TREBLE_UP (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioTrebleUpKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
