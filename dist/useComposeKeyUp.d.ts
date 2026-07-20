/**
 * React useKeyUp wrapper for key "Compose".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "Compose"
 * Description                 The Compose key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Multi_key (0xFF20)
 *                             Qt::Key_Multi_key (0x01001120)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useComposeKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
