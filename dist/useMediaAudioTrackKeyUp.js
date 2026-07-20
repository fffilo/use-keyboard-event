import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "MediaAudioTrack".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaAudioTrack"
 * Description                 The Audio Track key.
 * Virtual Keycode
 *     Linux                   Qt::Key_AudioCycleTrack (0x01000106)
 *     Android                 KEYCODE_MEDIA_AUDIO_TRACK (222)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMediaAudioTrackKeyUp(callback, enabled = true) {
    useKeyUp("MediaAudioTrack", callback, enabled);
};
