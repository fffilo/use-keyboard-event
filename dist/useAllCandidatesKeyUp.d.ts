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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAllCandidatesKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
