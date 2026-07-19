import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "PreviousCandidate".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "PreviousCandidate"
 * Description                 The Previous Candidate key. Selects the previous possible match for the ongoing input.
 * Virtual Keycode
 *     Linux                   GDK_KEY_PreviousCandidate (0xFF3E)
 *                             Qt::Key_PreviousCandidate (0x0100113E)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePreviousCandidateKeyUp(callback, enabled = true) {
    useKeyUp("PreviousCandidate", callback, enabled);
};
