import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MediaAudioTrack".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "MediaAudioTrack"
 * Description                 The Audio Track key.
 * Virtual Keycode
 *     Linux                   Qt::Key_AudioCycleTrack (0x01000106)
 *     Android                 KEYCODE_MEDIA_AUDIO_TRACK (222)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMediaAudioTrackKeyDown(callback, enabled = true, target) {
    useKeyDown("MediaAudioTrack", callback, enabled, target);
};
