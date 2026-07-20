/**
 * React useKeyUp wrapper for key "PowerOff".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "PowerOff"
 * Description                 The PowerOff or PowerDown key. Shuts off the system.
 * Virtual Keycode
 *     Linux                   GDK_KEY_PowerDown (0x1008FF21)
 *                             GDK_KEY_PowerOff (0x1008FF2A)
 *                             Qt::Key_PowerDown (0x0100010B)
 *                             Qt::Key_PowerOff (0x010000B7)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function usePowerOffKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
