import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "MediaPause".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "MediaPause"
 * Description                 Pauses the currently playing media. Note: Some older applications use "Pause", but this is not correct.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MEDIA_PAUSE (null)
 *     Linux                   GDK_KEY_AudioPause (0x1008FF31)
 *                             Qt::Key_MediaPause (0x1000085)
 *     Android                 KEYCODE_MEDIA_PAUSE (127)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaPauseKeyUp(callback, enabled = true) {
    useKeyUp("MediaPause", callback, enabled);
};
