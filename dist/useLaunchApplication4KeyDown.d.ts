/**
 * React useKeyDown wrapper for key "LaunchApplication4".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication4"
 * Description                 The fourth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch3 (0x1008FF43)
 *                             Qt::Key_Launch3 (0x010000A5)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication4KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
