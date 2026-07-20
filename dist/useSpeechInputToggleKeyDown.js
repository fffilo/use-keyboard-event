import useKeyDown from "./useKeyDown.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSpeechInputToggleKeyDown(callback, enabled = true, target) {
    useKeyDown("SpeechInputToggle", callback, enabled, target);
};
