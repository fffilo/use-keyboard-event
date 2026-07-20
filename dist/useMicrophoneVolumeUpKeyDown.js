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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMicrophoneVolumeUpKeyDown(callback, enabled = true, target) {
    useKeyDown("MicrophoneVolumeUp", callback, enabled, target);
};
