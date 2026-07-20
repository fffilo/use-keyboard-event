import useKeyDown from "./useKeyDown.js";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaPlayPauseKeyDown(callback, enabled = true) {
    useKeyDown("MediaPlayPause", callback, enabled);
};
