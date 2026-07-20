/**
 * React useKeyDown wrapper for key "LaunchApplication7".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication7"
 * Description                 The seventh generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch6 (0x1008FF46)
 *                             Qt::Key_Launch6 (0x010000A8)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication7KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
