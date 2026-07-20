/**
 * React useKeyUp wrapper for key "AudioBassBoostDown".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassBoostDown"
 * Description                 Reduces bass boosting or cycles downward through bass boost modes or states.
 * Virtual Keycode
 *     Windows                 VK_BASS_BOOST_DOWN (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioBassBoostDownKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
