/**
 * React useKeyDown wrapper for key "JunjaMode".
 *
 * Category                    IME and composition keys → Korean keyboards only
 * KeyboardEvent.key value     "JunjaMode"
 * Description                 Selects the Junja mode, in which Korean is represented using single-byte Latin characters.
 * Virtual Keycode
 *     Windows                 VK_JUNJA (0x17)
 *     Linux                   GDK_KEY_Hangul_Jeonja (0xFF38)
 *                             Qt::Key_Hangul_Jeonja (0x01001138)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useJunjaModeKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
