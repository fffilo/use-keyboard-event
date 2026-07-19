import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "AllCandidates".
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
export default function useAllCandidatesKeyDown(callback, enabled = true) {
    useKeyDown("AllCandidates", callback, enabled);
};
