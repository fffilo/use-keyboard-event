import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "BrightnessDown".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "BrightnessDown"
 * Description                 The Brightness Down key. Typically used to reduce the brightness of the display.
 * Virtual Keycode
 *     Linux                   GDK_KEY_MonBrightnessDown (0x1008FF03)
 *                             Qt::Key_MonBrightnessDown (0x010000B3)
 *     Android                 KEYCODE_BRIGHTNESS_DOWN (220)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useBrightnessDownKeyUp(callback, enabled = true, target) {
    useKeyUp("BrightnessDown", callback, enabled, target);
};
