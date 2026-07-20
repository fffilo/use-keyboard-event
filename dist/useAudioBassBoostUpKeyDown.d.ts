/**
 * React useKeyDown wrapper for key "AudioBassBoostUp".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBassBoostUp"
 * Description                 Increases the amount of bass boosting, or cycles upward through a set of bass boost modes or states.
 * Virtual Keycode
 *     Windows                 VK_BASS_BOOST_UP (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioBassBoostUpKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
