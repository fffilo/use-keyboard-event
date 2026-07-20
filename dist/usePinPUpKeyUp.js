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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePinPUpKeyUp(callback, enabled = true) {
    useKeyUp("PinPUp", callback, enabled);
};
