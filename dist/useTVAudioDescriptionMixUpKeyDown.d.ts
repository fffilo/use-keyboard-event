/**
 * React useKeyDown wrapper for key "TVAudioDescriptionMixUp".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAudioDescriptionMixUp"
 * Description                 Increases the audio description's mixing volume; increases the volume of the audio descriptions relative to the program sound.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_AUDIO_DESCRIPTION_MIX_UP (253)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVAudioDescriptionMixUpKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
