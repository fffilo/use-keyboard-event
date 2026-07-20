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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useDimmerKeyDown(callback, enabled = true, target) {
    useKeyDown("Dimmer", callback, enabled, target);
};
