/**
 * React useKeyDown wrapper for key "AudioSurroundModeNext".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioSurroundModeNext"
 * Description                 Selects the next available surround sound mode.
 * Virtual Keycode
 *     Windows                 VK_SURROUND_MODE_NEXT (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioSurroundModeNextKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
