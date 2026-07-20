import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MediaTrackPrevious".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "MediaTrackPrevious"
 * Description                 Seeks to the previous media or program track.
 * Virtual Keycode
 *     Windows                 VK_MEDIA_PREV_TRACK (0xB1)
 *                             APPCOMMAND_MEDIA_PREVIOUSTRACK (null)
 *     Linux                   GDK_KEY_AudioPrev (0x1008FF16)
 *                             Qt::Key_MediaPrevious (0x01000082)
 *     Android                 KEYCODE_MEDIA_PREVIOUS (88)
 *
 * Legacy Edge and Firefox (36 and earlier) use "MediaNextTrack" and "MediaPreviousTrack" instead of "MediaTrackNext" and "MediaTrackPrevious".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaTrackPreviousKeyDown(callback, enabled = true) {
    useKeyDown("MediaTrackPrevious", callback, enabled);
};
