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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePreviousCandidateKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
