/**
 * React useKeyDown wrapper for key "MediaFastForward".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "MediaFastForward"
 * Description                 Starts, continues, or increases the speed of fast forwarding the media.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MEDIA_FAST_FORWARD (null)
 *     Linux                   GDK_KEY_AudioForward (0x1008FF97)
 *                             Qt:Key_AudioForward (0x01000102)
 *     Android                 KEYCODE_MEDIA_FAST_FORWARD (90)
 *
 * Prior to Firefox 37, Firefox generated the key code "FastFwd" on some platforms and "Unidentified" on others instead of "MediaFastForward".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaFastForwardKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
