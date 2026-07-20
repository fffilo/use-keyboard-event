/**
 * React useKeyDown wrapper for key "MicrophoneVolumeDown".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "MicrophoneVolumeDown"
 * Description                 Decreases the microphone's input volume.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MICROPHONE_VOLUME_DOWN (null)
 *     Linux                   Qt::Key_MicVolumeDown (0x0100011E)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMicrophoneVolumeDownKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
