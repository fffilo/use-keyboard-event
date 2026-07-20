import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "AudioVolumeDown".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioVolumeDown"
 * Description                 Decreases the audio volume.
 * Virtual Keycode
 *     Windows                 VK_VOLUME_DOWN (0xAE)
 *                             APPCOMMAND_VOLUME_DOWN (null)
 *     Mac                     kVK_VolumeDown (0x49)
 *     Linux                   GDK_KEY_AudioLowerVolume (0x1008FF11)
 *                             Qt::Key_VolumeDown (0x01000070)
 *     Android                 KEYCODE_VOLUME_DOWN (25)
 *
 * Legacy Edge and Firefox (48 and earlier) use "VolumeUp", "VolumeDown", and "VolumeMute" instead of "AudioVolumeUp", "AudioVolumeDown", and "AudioVolumeMute". In Firefox 49 they were updated to match the latest specification.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAudioVolumeDownKeyDown(callback, enabled = true, target) {
    useKeyDown("AudioVolumeDown", callback, enabled, target);
};
