/**
 * React useKeyUp wrapper for key "TVAudioDescriptionMixDown".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAudioDescriptionMixDown"
 * Description                 Decreases the audio description's mixing volume; reduces the volume of the audio descriptions relative to the program sound.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_AUDIO_DESCRIPTION_MIX_DOWN (254)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVAudioDescriptionMixDownKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
