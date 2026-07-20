/**
 * React useKeyUp wrapper for key "LaunchApplication3".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication3"
 * Description                 The third generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch2 (0x1008FF42)
 *                             Qt::Key_Launch2 (0x010000A4)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication3KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
