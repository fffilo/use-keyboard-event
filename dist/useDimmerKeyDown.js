import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Dimmer".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Dimmer"
 * Description                 Adjusts the brightness of the device by toggling between two brightness levels or by cycling among multiple brightness levels.
 * Virtual Keycode
 *     Windows                 VK_DIMMER (null)
 *     Linux                   GDK_KEY_BrightnessAdjust (0x1008FF3B)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useDimmerKeyDown(callback, enabled = true) {
    useKeyDown("Dimmer", callback, enabled);
};
