/**
 * React useKeyUp wrapper for key "VideoModeNext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "VideoModeNext"
 * Description                 Cycles through the available video modes.
 * Virtual Keycode
 *     Windows                 VK_VIDEO_MODE_NEXT (null)
 *     Linux                   GDK_KEY_Next_VMode (0x1008FE22)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useVideoModeNextKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
