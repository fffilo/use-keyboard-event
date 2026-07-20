/**
 * React useKeyDown wrapper for key "Hyper".
 *
 * Category                    Modifier keys
 * KeyboardEvent.key value     "Hyper"
 * Description                 The Hyper key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Hyper_L (0xFFED)
 *                             GDK_KEY_Hyper_R (0xFFEE)
 *                             Qt::Key_Hyper_L (0x01000056)
 *                             Qt::Key_Hyper_R (0x01000057)
 *
 * Firefox generates the key value "OS" for the Super and Hyper keys, instead of "Super" and "Hyper".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useHyperKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
