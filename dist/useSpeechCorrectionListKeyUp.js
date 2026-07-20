import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "SpeechCorrectionList".
 *
 * Category                    Speech recognition keys
 * KeyboardEvent.key value     "SpeechCorrectionList"
 * Description                 Presents a list of possible corrections for a word which was incorrectly identified.
 * Virtual Keycode
 *     Windows                 APPCOMMAND_CORRECTION_LIST (null)
 *
 * The APPCOMMAND_CORRECTION_LIST command on Windows generates "Unidentified" on Firefox.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSpeechCorrectionListKeyUp(callback, enabled = true, target) {
    useKeyUp("SpeechCorrectionList", callback, enabled, target);
};
