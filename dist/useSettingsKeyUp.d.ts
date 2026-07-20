/**
 * React useKeyUp wrapper for key "Settings".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Settings"
 * Description                 Toggles display of the device's settings screen on and off.
 * Virtual Keycode
 *     Windows                 VK_SETTINGS (null)
 *     Linux                   Qt::Key_Settings (0x0100011C)
 *     Android                 KEYCODE_SETTINGS (null)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useSettingsKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
