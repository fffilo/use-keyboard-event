import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "SpeechInputToggle".
 *
 * Category                    Speech recognition keys
 * KeyboardEvent.key value     "SpeechInputToggle"
 * Description                 Toggles between dictation mode and command/control mode. This lets the speech engine know whether to interpret spoken words as input text or as commands.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE (null)
 *
 * The APPCOMMAND_DICTATE_OR_COMMAND_CONTROL_TOGGLE command on Windows generates "Unidentified" on Firefox.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSpeechInputToggleKeyDown(callback, enabled = true) {
    useKeyDown("SpeechInputToggle", callback, enabled);
};
