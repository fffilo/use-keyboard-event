/**
 * React useKeyDown wrapper for key "LaunchWordProcessor".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchWordProcessor"
 * Description                 The Word Processor key. This may be an icon of a specific word processor application, or a generic document icon.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Word (0x1008FF89)
 *                             Qt::Key_Word (0x010000F4)
 *
 * Firefox introduced support for this key in Firefox 37. Prior to that, this key was reported as "Unidentified".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchWordProcessorKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
