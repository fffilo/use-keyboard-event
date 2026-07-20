/**
 * React useKeyDown wrapper for key "Unidentified".
 *
 * Category                    Special values
 * KeyboardEvent.key value     "Unidentified"
 * Description                 The user agent wasn't able to map the event's virtual keycode to a specific key value. This can happen due to hardware or software constraints, or because of constraints around the platform on which the user agent is running.
 * Virtual Keycode
 *     Windows                 varies
 *     Mac                     varies
 *     Linux                   varies
 *     Android                 varies
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useUnidentifiedKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
