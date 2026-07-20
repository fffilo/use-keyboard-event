/**
 * React useKeyDown wrapper for key "LaunchApplication9".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication9"
 * Description                 The ninth generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Launch8 (0x1008FF48)
 *                             Qt::Key_Launch8 (0x010000AA)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication9KeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
