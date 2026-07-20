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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMediaAudioTrackKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
