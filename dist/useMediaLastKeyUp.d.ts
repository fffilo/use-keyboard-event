/**
 * React useKeyUp wrapper for key "MediaLast".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaLast"
 * Description                 Jumps back to the last-viewed content, program, or other media.
 * Virtual Keycode
 *     Windows                 VK_LAST (null)
 *     Linux                   Qt::Key_MediaLast (0x0100FFFF)
 *     Android                 KEYCODE_LAST_CHANNEL (229)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaLastKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
