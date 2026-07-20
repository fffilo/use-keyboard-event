import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AudioVolumeMute".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "AudioVolumeMute"
 * Description                 Mutes the audio.
 * Virtual Keycode
 *     Windows                 VK_VOLUME_MUTE (0xAD)
 *                             APPCOMMAND_VOLUME_MUTE (null)
 *     Mac                     kVK_Mute (0x4A)
 *     Linux                   GDK_KEY_AudioMute (0x1008FF12)
 *                             Qt::Key_VolumeMute (0x01000071)
 *     Android                 KEYCODE_VOLUME_MUTE (164)
 *
 * Legacy Edge and Firefox (48 and earlier) use "VolumeUp", "VolumeDown", and "VolumeMute" instead of "AudioVolumeUp", "AudioVolumeDown", and "AudioVolumeMute". In Firefox 49 they were updated to match the latest specification.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAudioVolumeMuteKeyUp(callback, enabled = true) {
    useKeyUp("AudioVolumeMute", callback, enabled);
};
