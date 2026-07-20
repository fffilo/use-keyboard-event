/**
 * React useKeyUp wrapper for key "LaunchScreenSaver".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchScreenSaver"
 * Description                 The Screen Saver key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_ScreenSaver (0x1008FF2D)
 *                             Qt::Key_ScreenSaver (0x010000BA)
 *
 * Firefox introduced support for this key in Firefox 37. Prior to that, this key was reported as "Unidentified".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchScreenSaverKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
