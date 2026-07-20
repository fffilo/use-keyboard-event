/**
 * React useKeyUp wrapper for key "LaunchApplication11".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchApplication11"
 * Description                 The 11th generic application launcher button.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LaunchA (0x1008FF4A)
 *                             Qt::Key_LaunchA (0x010000AC)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchApplication11KeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
