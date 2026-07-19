import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "MicrophoneVolumeUp".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "MicrophoneVolumeUp"
 * Description                 Increases the microphone's input volume.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MICROPHONE_VOLUME_UP (null)
 *     Linux                   Qt::Key_MicVolumeUp (0x0100011D)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMicrophoneVolumeUpKeyUp(callback, enabled = true) {
    useKeyUp("MicrophoneVolumeUp", callback, enabled);
};
