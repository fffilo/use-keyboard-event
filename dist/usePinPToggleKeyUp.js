import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "PinPToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "PinPToggle"
 * Description                 Toggles display of the picture-in-picture view on and off.
 * Virtual Keycode
 *     Windows                 VK_PINP_TOGGLE (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePinPToggleKeyUp(callback, enabled = true) {
    useKeyUp("PinPToggle", callback, enabled);
};
