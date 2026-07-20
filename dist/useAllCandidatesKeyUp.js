import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "AllCandidates".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "AllCandidates"
 * Description                 The All Candidates key, which starts multi-candidate mode, in which multiple candidates are displayed for the ongoing input.
 * Virtual Keycode
 *     Linux                   GDK_KEY_MultipleCandidate (null)
 *                             Qt::Key_MultipleCandidate (0x0100113D)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useAllCandidatesKeyUp(callback, enabled = true) {
    useKeyUp("AllCandidates", callback, enabled);
};
