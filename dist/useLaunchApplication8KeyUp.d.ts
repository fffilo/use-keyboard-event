/**
 * React useKeyUp wrapper for key "LaunchApplication8".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication8"
 * Description                 The eighth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch7 (0x1008FF47)
 *                             Qt::Key_Launch7 (0x010000A9)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication8KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
