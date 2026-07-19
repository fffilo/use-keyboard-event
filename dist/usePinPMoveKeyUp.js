import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "PinPMove".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PinPMove"
 * Description                 A button to control moving the picture-in-picture view.
 * Virtual Keycode
 *     Windows                 VK_PINP_MOVE (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePinPMoveKeyUp(callback, enabled = true) {
    useKeyUp("PinPMove", callback, enabled);
};
