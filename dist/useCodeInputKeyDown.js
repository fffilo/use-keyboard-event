import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "CodeInput".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "CodeInput"
 * Description                 The Code Input key, which enables code input mode, which lets the user enter characters by typing their code points (their Unicode character numbers, typically).
 * Virtual Keycode
 *     Linux                   GDK_KEY_Codeinput (0xFF37)
 *                             Qt::Key_Codeinput (0x01001137)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useCodeInputKeyDown(callback, enabled = true, target) {
    useKeyDown("CodeInput", callback, enabled, target);
};
