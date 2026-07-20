/**
 * React useKeyUp wrapper for key "TVAudioDescription".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVAudioDescription"
 * Description                 Toggles audio description mode on and off.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_AUDIO_DESCRIPTION (252)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVAudioDescriptionKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
