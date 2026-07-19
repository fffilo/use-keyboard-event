import useKeyDown from "./useKeyDown";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useBrightnessDownKeyDown(callback, enabled = true) {
    useKeyDown("BrightnessDown", callback, enabled);
};
