/**
 * React useKeyUp wrapper for key "LaunchApplication10".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication10"
 * Description                 The 10th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch9 (0x1008FF49)
 *                             Qt::Key_Launch9 (0x010000AB)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication10KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
