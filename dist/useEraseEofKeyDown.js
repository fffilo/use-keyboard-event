import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "EraseEof".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "EraseEof"
 * Description                 Erase to End of Field. Deletes all characters from the current cursor position to the end of the current field.
 * Virtual Keycode
 *     Windows                 VK_EREOF (0xF9)
 *     Linux                   GDK_KEY_3270_ExSelect (0xFD1B)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useEraseEofKeyDown(callback, enabled = true) {
    useKeyDown("EraseEof", callback, enabled);
};
