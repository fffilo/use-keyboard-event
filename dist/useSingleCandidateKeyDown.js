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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useSingleCandidateKeyDown(callback, enabled = true, target) {
    useKeyDown("SingleCandidate", callback, enabled, target);
};
