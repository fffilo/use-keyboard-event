import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "MicrophoneToggle".
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
export default function useMicrophoneToggleKeyDown(callback, enabled = true) {
    useKeyDown("MicrophoneToggle", callback, enabled);
};
