import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "MicrophoneToggle".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "MicrophoneToggle"
 * Description                 Toggles the microphone on and off.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MIC_ON_OFF_TOGGLE (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useMicrophoneToggleKeyUp(callback, enabled = true, target) {
    useKeyUp("MicrophoneToggle", callback, enabled, target);
};
