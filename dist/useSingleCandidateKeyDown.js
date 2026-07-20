import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "SingleCandidate".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "SingleCandidate"
 * Description                 The Single Candidate key. Enables single candidate mode (as opposed to multi-candidate mode); in this mode, only one candidate is displayed at a time.
 * Virtual Keycode
 *     Linux                   GDK_KEY_SingleCandidate (0xFF3C)
 *                             Qt::Key_SingleCandidate (0x0100113C)
 *
 * Prior to Firefox 37, these keys were "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSingleCandidateKeyDown(callback, enabled = true) {
    useKeyDown("SingleCandidate", callback, enabled);
};
