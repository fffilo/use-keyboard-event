import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "AudioVolumeUp".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioVolumeUp"
 * Description                 Increases the audio volume.
 * Virtual Keycode
 *     Windows                 VK_VOLUME_UP (0xAF)
 *                             APPCOMMAND_VOLUME_UP (null)
 *     Mac                     kVK_VolumeUp (0x48)
 *     Linux                   GDK_KEY_AudioRaiseVolume (0x1008FF13)
 *                             Qt::Key_VolumeUp (0x01000072)
 *     Android                 KEYCODE_VOLUME_UP (24)
 *
 * Legacy Edge and Firefox (48 and earlier) use "VolumeUp", "VolumeDown", and "VolumeMute" instead of "AudioVolumeUp", "AudioVolumeDown", and "AudioVolumeMute". In Firefox 49 they were updated to match the latest specification.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioVolumeUpKeyDown(callback, enabled = true) {
    useKeyDown("AudioVolumeUp", callback, enabled);
};
