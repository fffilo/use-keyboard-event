/**
 * React useKeyUp wrapper for key "AudioBalanceRight".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBalanceRight"
 * Description                 Adjusts audio balance toward the right.
 * Virtual Keycode
 *     Windows                 VK_AUDIO_BALANCE_RIGHT (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioBalanceRightKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
