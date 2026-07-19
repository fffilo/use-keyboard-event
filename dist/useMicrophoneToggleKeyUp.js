import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "MicrophoneToggle".
 *
 * Category                    Audio control keys
 * KeyboardEvent.key value     "MicrophoneToggle"
 * Description                 Toggles the microphone on and off.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_MIC_ON_OFF_TOGGLE (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useMicrophoneToggleKeyUp(callback, enabled = true) {
    useKeyUp("MicrophoneToggle", callback, enabled);
};
