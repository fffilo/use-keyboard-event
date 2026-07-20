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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useCodeInputKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
