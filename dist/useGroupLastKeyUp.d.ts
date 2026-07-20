/**
 * React useKeyUp wrapper for key "GroupLast".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "GroupLast"
 * Description                 Switches to the last character group on an ISO/IEC 9995 keyboard [https://en.wikipedia.org/wiki/ISO/IEC_9995].
 * Virtual Keycode
 *     Linux                   GDK_KEY_ISO_Last_Group (0xFE0E)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useGroupLastKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
