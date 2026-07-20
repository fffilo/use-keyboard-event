import useKeyDown from "./useKeyDown.js";

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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useBrightnessUpKeyDown(callback, enabled = true, target) {
    useKeyDown("BrightnessUp", callback, enabled, target);
};
