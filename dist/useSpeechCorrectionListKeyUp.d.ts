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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSpeechCorrectionListKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
