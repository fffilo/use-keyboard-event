/**
 * React useKeyUp wrapper for key "LogOff".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "LogOff"
 * Description                 The LogOff key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LogOff (0x1008FF61)
 *                             Qt::Key_LogOff (0x010000D9)
 *
 * Prior to Firefox 37, this key generated the value "Unidentified".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLogOffKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
