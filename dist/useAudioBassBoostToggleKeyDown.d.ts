/**
 * React useKeyDown wrapper for key "AudioBassBoostToggle".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassBoostToggle"
 * Description                 Toggles bass boosting on and off.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_BASS_BOOST (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioBassBoostToggleKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
