import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "MediaTrackNext".
 *
 * Category                    Multimedia keys
 * KeyboardEvent.key value     "MediaTrackNext"
 * Description                 Seeks to the next media or program track.
 * Virtual Keycode
 *     Windows                 VK_MEDIA_NEXT_TRACK (0xB0)
 *                             APPCOMMAND_MEDIA_NEXTTRACK (null)
 *     Linux                   GDK_KEY_AudioNext (0x1008FF17)
 *                             Qt::Key_MediaNext (0x01000083)
 *     Android                 KEYCODE_MEDIA_NEXT (87)
 *
 * Legacy Edge and Firefox (36 and earlier) use "MediaNextTrack" and "MediaPreviousTrack" instead of "MediaTrackNext" and "MediaTrackPrevious".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaTrackNextKeyDown(callback, enabled = true) {
    useKeyDown("MediaTrackNext", callback, enabled);
};
