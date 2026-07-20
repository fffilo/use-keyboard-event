import useKeyUp from "./useKeyUp.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMicrophoneVolumeUpKeyUp(callback, enabled = true, target) {
    useKeyUp("MicrophoneVolumeUp", callback, enabled, target);
};
