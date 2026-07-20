/**
 * React useKeyUp wrapper for key "MediaRewind".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "MediaRewind"
 * Description                 Starts, continues, or increases the speed of rewinding the media.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MEDIA_REWIND (null)
 *     Linux                   GDK_KEY_AudioRewind (0x1008FF3E)
 *                             Qt::Key_AudioRewind (0x010000C5)
 *     Android                 KEYCODE_MEDIA_REWIND (89)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaRewindKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
