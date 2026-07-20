/**
 * React useKeyDown wrapper for key "AudioBalanceLeft".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioBalanceLeft"
 * Description                 Adjusts audio balance toward the left.
 * Virtual Keycode
 *     Windows                 VK_AUDIO_BALANCE_LEFT (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAudioBalanceLeftKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
