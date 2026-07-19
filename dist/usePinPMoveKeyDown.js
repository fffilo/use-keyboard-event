import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "PinPMove".
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
export default function usePinPMoveKeyDown(callback, enabled = true) {
    useKeyDown("PinPMove", callback, enabled);
};
