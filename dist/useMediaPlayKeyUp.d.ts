/**
 * React useKeyUp wrapper for key "MediaPlay".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "MediaPlay"
 * Description                 Starts or continues playing media at normal speed, if not already doing so. Has no effect otherwise.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MEDIA_PLAY (null)
 *     Linux                   GDK_KEY_AudioPlay (0x1008FF14)
 *     Android                 KEYCODE_MEDIA_PLAY (126)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaPlayKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
