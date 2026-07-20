/**
 * React useKeyDown wrapper for key "BrightnessDown".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "BrightnessDown"
 * Description                 The Brightness Down key. Typically used to reduce the brightness of the display.
 * Virtual Keycode
 *     Linux                   GDK_KEY_MonBrightnessDown (0x1008FF03)
 *                             Qt::Key_MonBrightnessDown (0x010000B3)
 *     Android                 KEYCODE_BRIGHTNESS_DOWN (220)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useBrightnessDownKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
