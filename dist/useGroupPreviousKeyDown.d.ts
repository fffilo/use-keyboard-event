/**
 * React useKeyDown wrapper for key "GroupPrevious".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "GroupPrevious"
 * Description                 Switches to the previous character group on an ISO/IEC 9995 keyboard [https://en.wikipedia.org/wiki/ISO/IEC_9995].
 * Virtual Keycode
 *     Linux                   GDK_KEY_ISO_Prev_Group (0xFE0A)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useGroupPreviousKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
