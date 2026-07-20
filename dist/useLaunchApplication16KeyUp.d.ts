/**
 * React useKeyUp wrapper for key "LaunchApplication16".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication16"
 * Description                 The 16th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchF (0x1008FF4F)
 *                             Qt::Key_LaunchF (0x010000B1)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication16KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
