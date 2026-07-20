/**
 * React useKeyUp wrapper for key "NonConvert".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "NonConvert"
 * Description                 The NonConvert ("Don't convert") key. This accepts the current input method sequence without running conversion when using an IME.
 * Virtual Keycode
 *     Windows                 VK_NONCONVERT (0x1D)
 *     Linux                   GDK_KEY_Muhenkan (0xFF22)
 *                             Qt::Key_Muhenkan (0x01001122)
 *     Android                 KEYCODE_MUHENKAN (213)
 *
 * The NonConvert key is reported as "Nonconvert" instead of the correct "NonConvert" by Firefox versions 36 and earlier.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useNonConvertKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
