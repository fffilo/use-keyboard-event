/**
 * React useKeyUp wrapper for key "HangulMode".
 *
 * Category                    IME and composition keys → Korean keyboards only
 * KeyboardEvent.key value     "HangulMode"
 * Description                 The Hangul (Korean character set) mode key, which toggles between Hangul and English entry modes.
 * Virtual Keycode
 *     Windows                 VK_HANGUL (0x15)
 *     Linux                   GDK_KEY_Hangul (0xFF31)
 *                             Qt::Key_Hangul (0x01001131)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useHangulModeKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
