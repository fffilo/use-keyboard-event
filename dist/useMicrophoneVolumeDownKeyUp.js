import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "MicrophoneVolumeDown".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "MicrophoneVolumeDown"
 * Description                 Decreases the microphone's input volume.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MICROPHONE_VOLUME_DOWN (null)
 *     Linux                   Qt::Key_MicVolumeDown (0x0100011E)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMicrophoneVolumeDownKeyUp(callback, enabled = true, target) {
    useKeyUp("MicrophoneVolumeDown", callback, enabled, target);
};
