/**
 * React useKeyUp wrapper for key "MicrophoneVolumeMute".
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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMicrophoneVolumeMuteKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
