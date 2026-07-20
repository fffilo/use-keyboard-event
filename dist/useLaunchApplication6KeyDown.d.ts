/**
 * React useKeyDown wrapper for key "LaunchApplication6".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication6"
 * Description                 The sixth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch5 (0x1008FF45)
 *                             Qt::Key_Launch5 (0x010000A7)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication6KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
