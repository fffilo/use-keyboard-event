import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "NextCandidate".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "NextCandidate"
 * Description                 The Next Candidate function key. Selects the next possible match for the ongoing input.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useNextCandidateKeyUp(callback, enabled = true, target) {
    useKeyUp("NextCandidate", callback, enabled, target);
};
