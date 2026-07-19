import useKeyDown from "./useKeyDown";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useBrightnessUpKeyDown(callback, enabled = true) {
    useKeyDown("BrightnessUp", callback, enabled);
};
