/**
 * React useKeyDown wrapper for key "WakeUp".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "WakeUp"
 * Description                 The WakeUp key. Used to wake the computer from the hibernation or standby modes.
 * Virtual Keycode
 *     Linux                   GDK_KEY_WakeUp (0x1008FF2B)
 *                             Qt::Key_WakeUp (0x010000B8)
 *     Android                 KEYCODE_WAKEUP (224)
 *
 * Prior to Firefox 37, this key generated the value "Unidentified".
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useWakeUpKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
