import useKeyDown from "./useKeyDown.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAllCandidatesKeyDown(callback, enabled = true, target) {
    useKeyDown("AllCandidates", callback, enabled, target);
};
