/**
 * React useKeyUp wrapper for key "LaunchApplication14".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication14"
 * Description                 The 14th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchD (0x1008FF4D)
 *                             Qt::Key_LaunchD (0x010000AF)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication14KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
