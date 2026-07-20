/**
 * React useKeyUp wrapper for key "Super".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "Super"
 * Description                 The Super key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Super_L (0xFFEB)
 *                             GDK_KEY_Super_R (0xFFEC)
 *                             Qt::Key_Super_L (0x01000053)
 *                             Qt::Key_Super_R (0x01000054)
 *
 * Firefox generates the key value "OS" for the Super and Hyper keys, instead of "Super" and "Hyper".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSuperKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
