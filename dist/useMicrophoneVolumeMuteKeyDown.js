import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MicrophoneVolumeMute".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "MicrophoneVolumeMute"
 * Description                 Mutes the microphone input.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MICROPHONE_VOLUME_MUTE (null)
 *     Linux                   GDK_KEY_AudioMicMute (0x1008FFB2)
 *                             Qt::Key_MicMute (0x01000113)
 *     Android                 KEYCODE_MUTE (91)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMicrophoneVolumeMuteKeyDown(callback, enabled = true, target) {
    useKeyDown("MicrophoneVolumeMute", callback, enabled, target);
};
