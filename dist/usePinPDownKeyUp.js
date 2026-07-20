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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePinPDownKeyUp(callback, enabled = true) {
    useKeyUp("PinPDown", callback, enabled);
};
