/**
 * React useKeyDown wrapper for key "BrightnessUp".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "BrightnessUp"
 * Description                 The Brightness Up key. Typically increases the brightness of the display.
 * Virtual Keycode
 *     Linux                   GDK_KEY_MonBrightnessUp (0x1008FF02)
 *                             Qt::Key_MonBrightnessUp (0x010000B2)
 *     Android                 KEYCODE_BRIGHTNESS_UP (221)
 *
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useBrightnessUpKeyDown(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
