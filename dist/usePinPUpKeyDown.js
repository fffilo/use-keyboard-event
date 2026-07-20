import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "PinPUp".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PinPUp"
 * Description                 A button to move the picture-in-picture view upward.
 * Virtual Keycode
 *     Windows                 VK_PINP_UP (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePinPUpKeyDown(callback, enabled = true, target) {
    useKeyDown("PinPUp", callback, enabled, target);
};
