import useKeyUp from "./useKeyUp.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePreviousCandidateKeyUp(callback, enabled = true, target) {
    useKeyUp("PreviousCandidate", callback, enabled, target);
};
