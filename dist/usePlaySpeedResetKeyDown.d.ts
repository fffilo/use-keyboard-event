/**
 * React useKeyDown wrapper for key "PlaySpeedReset".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PlaySpeedReset"
 * Description                 Returns the media playback rate to normal.
 * Virtual Keycode
 *     Windows                 VK_PLAY_SPEED_RESET (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePlaySpeedResetKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
