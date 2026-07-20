/**
 * React useKeyUp wrapper for key "CrSel".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "CrSel"
 * Description                 The Cursor Select key, CrSel.
 * Virtual Keycode
 *     Windows                 VK_CRSEL (0xF7)
 *     Linux                   GDK_KEY_3270_CursorSelect (0xFD1C)
 *
 * Firefox 36 and earlier generates the value "Crsel" instead of "CrSel" when the CrSel key is pressed.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useCrSelKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
