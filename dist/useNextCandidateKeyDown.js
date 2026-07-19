import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "NextCandidate".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "NextCandidate"
 * Description                 The Next Candidate function key. Selects the next possible match for the ongoing input.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useNextCandidateKeyDown(callback, enabled = true) {
    useKeyDown("NextCandidate", callback, enabled);
};
