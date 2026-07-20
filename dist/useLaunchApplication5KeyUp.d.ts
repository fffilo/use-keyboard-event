/**
 * React useKeyUp wrapper for key "LaunchApplication5".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication5"
 * Description                 The fifth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch4 (0x1008FF44)
 *                             Qt::Key_Launch4 (0x010000A6)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication5KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
