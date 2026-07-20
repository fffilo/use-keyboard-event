/**
 * React useKeyUp wrapper for key "PlaySpeedDown".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PlaySpeedDown"
 * Description                 Decreases the media playback rate.
 * Virtual Keycode
 *     Windows                 VK_PLAY_SPEED_DOWN (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePlaySpeedDownKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
