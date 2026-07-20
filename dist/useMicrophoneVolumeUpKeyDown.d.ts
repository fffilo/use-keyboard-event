/**
 * React useKeyDown wrapper for key "MicrophoneVolumeUp".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "MicrophoneVolumeUp"
 * Description                 Increases the microphone's input volume.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MICROPHONE_VOLUME_UP (null)
 *     Linux                   Qt::Key_MicVolumeUp (0x0100011D)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useMicrophoneVolumeUpKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
