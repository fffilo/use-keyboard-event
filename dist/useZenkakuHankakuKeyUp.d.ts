/**
 * React useKeyUp wrapper for key "ZenkakuHankaku".
 *
 * Category                    IME and composition keys → Japanese keyboards only
 * KeyboardEvent.key value     "ZenkakuHankaku"
 * Description                 The Zenkaku/Hankaku (full width/half width) toggle key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Zenkaku_Hankaku (0xFF2A)
 *                             Qt::Zenkaku_Hankaku (0x0100112A)
 *     Android                 KEYCODE_ZENKAKU_HANKAKU (211)
 *
 * This key is reported as "Unidentified" prior to Firefox 37.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useZenkakuHankakuKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
