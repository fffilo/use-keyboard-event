import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "MediaPlayPause".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMediaPlayPauseKeyUp(callback, enabled = true, target) {
    useKeyUp("MediaPlayPause", callback, enabled, target);
};
