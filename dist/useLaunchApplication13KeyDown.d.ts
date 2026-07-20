/**
 * React useKeyDown wrapper for key "LaunchApplication13".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication13"
 * Description                 The 13th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchC (0x1008FF4C)
 *                             Qt::Key_LaunchC (0x010000AE)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication13KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
