import useKeyDown from "./useKeyDown.js";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMicrophoneVolumeDownKeyDown(callback, enabled = true) {
    useKeyDown("MicrophoneVolumeDown", callback, enabled);
};
