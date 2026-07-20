/**
 * React useKeyDown wrapper for key "Attn".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Attn"
 * Description                 The Attn (Attention) key.
 * Virtual Keycode
 *     Windows                 VK_OEM_ATTN (0xF0)
 *     Linux                   GDK_KEY_3270_Attn (0xFD0E)
 *
 * The Attn key generates the key code "Unidentified" on Firefox and Google Chrome, unless the Japanese keyboard layout is in effect, in which case it generates "KanaMode" instead.
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useAttnKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
