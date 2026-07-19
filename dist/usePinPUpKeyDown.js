import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "PinPUp".
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
export default function usePinPUpKeyDown(callback, enabled = true) {
    useKeyDown("PinPUp", callback, enabled);
};
