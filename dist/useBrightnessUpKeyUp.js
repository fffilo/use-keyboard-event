import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "BrightnessUp".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "BrightnessUp"
 * Description                 The Brightness Up key. Typically increases the brightness of the display.
 * Virtual Keycode
 *     Linux                   GDK_KEY_MonBrightnessUp (0x1008FF02)
 *                             Qt::Key_MonBrightnessUp (0x010000B2)
 *     Android                 KEYCODE_BRIGHTNESS_UP (221)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useBrightnessUpKeyUp(callback, enabled = true) {
    useKeyUp("BrightnessUp", callback, enabled);
};
