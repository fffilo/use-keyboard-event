import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "PinPDown".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PinPDown"
 * Description                 A button to move the picture-in-picture view downward.
 * Virtual Keycode
 *     Windows                 VK_PINP_DOWN (null)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePinPDownKeyUp(callback, enabled = true, target) {
    useKeyUp("PinPDown", callback, enabled, target);
};
