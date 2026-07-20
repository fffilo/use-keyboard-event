/**
 * React useKeyDown wrapper for key "LaunchApplication15".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication15"
 * Description                 The 15th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchE (0x1008FF4E)
 *                             Qt::Key_LaunchE (0x010000B0)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication15KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
