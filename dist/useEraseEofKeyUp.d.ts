/**
 * React useKeyUp wrapper for key "EraseEof".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "EraseEof"
 * Description                 Erase to End of Field. Deletes all characters from the current cursor position to the end of the current field.
 * Virtual Keycode
 *     Windows                 VK_EREOF (0xF9)
 *     Linux                   GDK_KEY_3270_ExSelect (0xFD1B)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useEraseEofKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
