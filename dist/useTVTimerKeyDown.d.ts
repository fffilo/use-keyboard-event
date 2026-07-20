/**
 * React useKeyDown wrapper for key "TVTimer".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVTimer"
 * Description                 Timer programming button.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_TIMER_PROGRAMMING (258)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useTVTimerKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
