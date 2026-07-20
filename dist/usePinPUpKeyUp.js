import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "PinPUp".
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
export default function usePinPUpKeyUp(callback, enabled = true, target) {
    useKeyUp("PinPUp", callback, enabled, target);
};
