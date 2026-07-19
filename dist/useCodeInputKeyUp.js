import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "CodeInput".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "CodeInput"
 * Description                 The Code Input key, which enables code input mode, which lets the user enter characters by typing their code points (their Unicode character numbers, typically).
 * Virtual Keycode
 *     Linux                   GDK_KEY_Codeinput (0xFF37)
 *                             Qt::Key_Codeinput (0x01001137)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useCodeInputKeyUp(callback, enabled = true) {
    useKeyUp("CodeInput", callback, enabled);
};
