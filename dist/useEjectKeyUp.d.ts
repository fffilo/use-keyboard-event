/**
 * React useKeyUp wrapper for key "Eject".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "Eject"
 * Description                 The Eject key. Ejects removable media (or toggles an optical storage device tray open and closed).
 * Virtual Keycode
 *     Linux                   GDK_KEY_Eject (0x1008FF2C)
 *                             Qt::Key_Eject (0x010000B9)
 *     Android                 KEYCODE_MEDIA_EJECT (129)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useEjectKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
