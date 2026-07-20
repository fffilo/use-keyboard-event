import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Wink".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Wink"
 * Description                 Causes the device to identify itself in some fashion, such as by flashing a light, briefly changing the brightness of indicator lights, or emitting a tone.
 * Virtual Keycode
 *     Windows                 VK_WINK (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useWinkKeyDown(callback, enabled = true, target) {
    useKeyDown("Wink", callback, enabled, target);
};
