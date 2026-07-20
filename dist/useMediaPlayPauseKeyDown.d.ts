/**
 * React useKeyDown wrapper for key "MediaPlayPause".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "MediaPlayPause"
 * Description                 Toggles between playing and pausing the current media.
 * Virtual Keycode
 *     Windows                 VK_MEDIA_PLAY_PAUSE (0xB3)
 *                             APPCOMMAND_MEDIA_PLAY_PAUSE (null)
 *     Linux                   Qt::Key_MediaTogglePlayPause (0x1000086)
 *     Android                 KEYCODE_MEDIA_PLAY_PAUSE (85)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaPlayPauseKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
