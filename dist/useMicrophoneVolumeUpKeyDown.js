import useKeyDown from "./useKeyDown.js";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMicrophoneVolumeUpKeyDown(callback, enabled = true) {
    useKeyDown("MicrophoneVolumeUp", callback, enabled);
};
