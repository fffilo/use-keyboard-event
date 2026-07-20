/**
 * React useKeyUp wrapper for key "SingleCandidate".
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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSingleCandidateKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
