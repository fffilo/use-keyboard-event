/**
 * React useKeyUp wrapper for key "PlaySpeedUp".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PlaySpeedUp"
 * Description                 Increases the media playback rate.
 * Virtual Keycode
 *     Windows                 VK_PLAY_SPEED_UP (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePlaySpeedUpKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
