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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSpeechCorrectionListKeyUp(callback, enabled = true) {
    useKeyUp("SpeechCorrectionList", callback, enabled);
};
